import { Match } from './match.js'

export default class PalyOffMatch extends Match {
    constructor (){
        super(localTeam, awayTeam/*, config*/)
    }

    /*setup(config) {
        const defaultConfig = {
            pointsPerWin: 1,
            pointsPerLose: 0
        }
        this.config = Object.assign(defaultConfig, config)
    }*/
}