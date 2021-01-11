import { teams } from './teams.js'
import { GroupsMatch, initSchedule , teamsShuffler , groupGenerator } from './groups.js'
import { Match } from './match.js'

//Imprimimos todos los equipos sin mezclar
for (let i=0;i<teams.length;i++){
    console.log(teams[i].name," - ",teams[i].code)
}

//Mwzclamos aleatoriamente los equipos y los volvemos a imprimir
teamsShuffler(teams)
for (let i=0;i<teams.length;i++){
    console.log(teams[i].name," - ",teams[i].code)
}

console.log(teams)

// Me devuelve un array de arrays de arrays con la planificación (partidos - jornada por grupo - planificación)
const journeyPlanification = initSchedule(groupGenerator(teams)) 


for (let i = 0;i<journeyPlanification.length; i++){
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        currentMatch.play()
        console.log(currentMatch.play())
    }
    //console.log("Jugando jornada",journeyPlanification[i])
}
