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

}
