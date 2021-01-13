import { teams } from './teams.js'
import { GroupsMatch, initSchedule , teamsShuffler , groupGenerator, updateTeamsGroups } from './groups.js'
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


//Divido este buche en tres al tener que dar los resultados jornada a jornada
/*for (let i = 0;i<journeyPlanification.length; i++){
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play()
        console.log(results) //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        console.log(groupsResults)
    }
}*/

//Jornada 1
console.log("Jugando Jornada 1 de la fase de grupos")
for (let i = 0;i<(journeyPlanification.length)/3; i++){
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play()
        console.log(results) //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        console.log(groupsResults)
    }
}

//Jornada 2
console.log("Jugando Jornada 2 de la fase de grupos")
for (let i = ((journeyPlanification.length)/3);i<(2*(journeyPlanification.length)/3); i++){
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play()
        console.log(results) //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        console.log(groupsResults)
    }
}

//Jornada 3
console.log("Jugando Jornada 3 de la fase de grupos")
for (let i = (2*(journeyPlanification.length)/3);i<journeyPlanification.length; i++){
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play()
        console.log(results) //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        console.log(groupsResults)
    }
}