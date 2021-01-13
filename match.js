
export class Match {
    constructor (localTeam, awayTeam){
        this.localTeam = localTeam
        this.awayTeam = awayTeam
        this.summaries=[]
    }

    goalsCreator(){
        return Math.floor(Math.round(Math.random() * 10)) //Con un Math.floor se obtienen valores más realistas de cantidad de goles
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

    getTeamForName(array) {
        const localTeam = this.localTeam
        const awayTeam = this.awayTeam
        const filteredTeams = array.filter(array => array.name == localTeam || array.name == awayTeam)
        return filteredTeams
    }

    /*updateTeamsGroups(results) {
        results.localGoals = this.localTeam.goalsFor
        results.localGoals = this.awayTeam.goalsAgainst 
        results.awayGoals  = this.awayTeam.goalsFor 
        results.awayGoals = this.localTeam.goalsAgainst 
        if (results.localGoals > results.awayGoals) { // Gana equipo local
            this.localTeam.points += 3
        } else if (results.awayGoals > results.localGoals) { // Gana equipo visitante
            this.awayTeam.points += 3
        } else if (results.awayGoals == results.localGoals) { // Empatan
            this.localTeam.points += 1 
            this.awayTeam.points += 1 
        }
    }*/

    /*pointsCleaner(team){
        customizeTeam(team){
            this.club.points=0
        }
    }*/
}
