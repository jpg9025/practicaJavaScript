import { teams } from './teams.js'
import { GroupsMatch, initSchedule , teamsShuffler , groupGenerator } from './groups.js'
import { Match } from './match.js'

console.log(teams)

teamsShuffler(teams)

console.log(teams)

const journeyPlanification = initSchedule(groupGenerator(teams)) // Me devuelve un array de arrays de arrays con la planificación (partidos - jornada por grupo - planificación)


for (let i = 0;i<journeyPlanification.length; i++){
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        currentMatch.play()
        console.log(currentMatch.play())
    }
    //console.log("Jugando jornada",journeyPlanification[i])
}
