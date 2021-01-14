import { Match } from './match.js'
import { orderSummaries } from './teams.js'

export default class PalyOffMatch extends Match {
    constructor (localTeam, awayTeam){
        super(localTeam, awayTeam)
    }

    play(){
        const localGoals = this.goalsCreator()
        const awayGoals = this.goalsCreator()
        return {
            localTeam: this.localTeam,
            localGoals: localGoals,
            awayTeam: this.awayTeam,
            awayGoals: awayGoals
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