const localTeam = 0
const awayTeam = 1

export class Match {
    constructor (localTeam, awayTeam/*, config={}*/){
        this.localTeam = localTeam
        this.awayTeam = awayTeam
        //this.setup(config)
        this.summaries=[]
    }

    goalsCreator() {
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

    /*pointsCleaner(team){
        customizeTeam(team){
            this.club.points=0
        }
    }*/
}


