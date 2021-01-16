import { Match } from './match.js'
import { orderSummaries } from './teams.js'

export class PlayOffMatch extends Match {
    constructor (localTeam, awayTeam){
        super(localTeam, awayTeam)
    }

    play(){
        let localGoals = this.goalsCreator()
        let awayGoals = this.goalsCreator()
        let luckyLocalA = (Math.random())*100
        let luckyLocalB = (Math.random())*100
        if (localGoals !== awayGoals) {
            return {
                localTeam: this.localTeam.name,
                localGoals: localGoals,
                awayTeam: this.awayTeam.name,
                awayGoals: awayGoals
            }
        } else if (awayGoals == localGoals) { // Para evitar empates lo hago a suertes con dos números aleatorios
            if (luckyLocalA > luckyLocalB) {
                localGoals += 1
            } else if (luckyLocalA < luckyLocalB) {
                awayGoals += 1
            }
            return {
                localTeam: this.localTeam.name,
                localGoals: localGoals,
                awayTeam: this.awayTeam.name,
                awayGoals: awayGoals
            }
        }
        
    }

    updatePlayOffTeams(results){
        this.localTeam.goalsFor = results.localGoals
        this.localTeam.goalsAgainst = results.awayGoals
        this.localTeam.goalsDiff = results.localGoals - results.awayGoals
        this.awayTeam.goalsFor = results.awayGoals
        this.awayTeam.goalsAgainst = results.localGoals
        this.awayTeam.goalsDiff = results.awayGoals - results.localGoals
        if (results.localGoals > results.awayGoals) {
            this.localTeam.points +=1
            this.localTeam.matchesWon += 1
            this.awayTeam.matchesLost += 1
        } else {
            this.awayTeam.points +=1
            this.localTeam.matchesLost += 1
            this.awayTeam.matchesWon += 1
        }
    }
}

export const clearSummaries = function(array) {
    for (let i=0;i<array.length;i++) {
        array[i].points = 0 
        array[i].goalsFor = 0 
        array[i].goalsAgainst = 0 
        array[i].goalsDiff = 0 
        array[i].matchesWon = 0 
        array[i].matchesDraw =  0 
        array[i].matchesLost = 0 
    }
    return array
}

export const updateSummaries = function (array, results) {
    for(let i=0;i<results.length;i++){
        if(results[i].points>0){
            array.push(results[i])
        }
    }
    return array
}

export const creatorSchedulePlayOff = function(array) {
    const roundResults=[]
    for (let i=0;i<array.length;i+=4){
        const currentMatch1 = new PlayOffMatch (array[i],array[i+3])
        const currentMatch2 = new PlayOffMatch (array[i+1],array[i+2])
        const results1 = currentMatch1.play()
        currentMatch1.updatePlayOffTeams(results1)
        roundResults.push(currentMatch1.localTeam,currentMatch1.awayTeam)
        console.log("Jugando partido [ '",array[i].name,"', '",array[i+3].name,"' ]")
        console.log(`${results1.localTeam} ${results1.localGoals} - ${results1.awayGoals} ${results1.awayTeam}`)
        const results2 = currentMatch2.play()
        currentMatch2.updatePlayOffTeams(results2)
        roundResults.push(currentMatch2.localTeam,currentMatch2.awayTeam)
        console.log("Jugando partido [ '",array[i+1].name,"', '",array[i+2].name,"' ]")
        console.log(`${results2.localTeam} ${results2.localGoals} - ${results2.awayGoals} ${results2.awayTeam}`)
    }
    return roundResults
}

export const teamsFor3and4Position = function (array, results) {
    for(let i=0;i<results.length;i++){
        if(results[i].points<=0){
            array.push(results[i])
        }
    }
    return array
}