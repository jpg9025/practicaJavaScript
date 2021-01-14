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