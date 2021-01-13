import { teams, updateTeamsGroups } from './teams.js'
import { GroupsMatch, initSchedule , teamsShuffler , groupGenerator } from './groups.js'
import { Match } from './match.js'

//Imprimimos todos los equipos sin mezclar
for (let i=0;i<teams.length;i++){
    console.log(teams[i].name," - ",teams[i].code)
}

//Mwzclamos aleatoriamente los equipos y los volvemos a imprimir
console.log("\n-----\n")
teamsShuffler(teams)
for (let i=0;i<teams.length;i++){
    console.log(teams[i].name," - ",teams[i].code)
}

// Me devuelve un array de arrays de arrays con la planificación (partidos - jornada por grupo - planificación)
const journeyPlanification = initSchedule(groupGenerator(teams)) 


for (let i = 0;i<journeyPlanification.length; i++){
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play()
        console.log(results) //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        //console.log(teamsFiltered)
        console.log(updateTeamsGroups(results,teamsFiltered))
    }
}


