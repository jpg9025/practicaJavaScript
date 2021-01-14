import { updateTeamsArray0, updateTeamsArray1, teams, orderSummaries } from './teams.js'
import { GroupsMatch, initSchedule , teamsShuffler , groupGenerator, updateTeamsGroups } from './groups.js'
import { Match } from './match.js'
import { clearSummaries } from './playoff.js'

//Imprimimos todos los equipos sin mezclar
for (let i=0;i<teams.length;i++){
    console.log(teams[i].name," - ",teams[i].code)
}

//Mezclamos aleatoriamente los equipos
const teamsShufflered = teamsShuffler(teams)

// Me devuelve un array de arrays de arrays con la planificación (partidos - jornada por grupo - planificación)
const journeyPlanification = initSchedule(groupGenerator(teams))
const teamsWhichPassToPlayOff = [] // Array en el que incluiré los equipos que pasen de la fase de grupos

//Jornada 1
console.log("\n JUGANDO PRIMERA JORNADA DE LA FASE DE GRUPOS \n")
for (let i = 0;i<(journeyPlanification.length)/3; i++){
    const summariesFirstJourneyTotal = []
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play()
        console.log(results) //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        const summariesFirstJourney0 = updateTeamsArray0(teamsShufflered, groupsResults)
        const summariesFirstJourney1 = updateTeamsArray1(teamsShufflered, groupsResults)
        summariesFirstJourneyTotal.push(summariesFirstJourney0,summariesFirstJourney1)
    }
    console.table(summariesFirstJourneyTotal.sort(orderSummaries)) //Ordenamos la clasificación de la primera jornada
}

//Jornada 2
console.log("\n JUGANDO SEGUNDA JORNADA DE LA FASE DE GRUPOS \n")
for (let i = ((journeyPlanification.length)/3);i<(2*(journeyPlanification.length)/3); i++){
    const summariesSecondJourneyTotal = []
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play()
        console.log(results) //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        const summariesSecondJourney0 = updateTeamsArray0(teamsShufflered, groupsResults)
        const summariesSecondJourney1 = updateTeamsArray1(teamsShufflered, groupsResults)
        summariesSecondJourneyTotal.push(summariesSecondJourney0,summariesSecondJourney1)
    }
    console.table(summariesSecondJourneyTotal.sort(orderSummaries)) //Ordenamos la clasificación de la segunda jornada
}

//Jornada 3
console.log("\n JUGANDO TERCERA JORNADA DE LA FASE DE GRUPOS \n")
for (let i = (2*(journeyPlanification.length)/3);i<journeyPlanification.length; i++){
    const summariesThirdJourneyTotal = []
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play()
        console.log(results) //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        const summariesThirdJourney0 = updateTeamsArray0(teamsShufflered, groupsResults)
        const summariesThirdJourney1 = updateTeamsArray1(teamsShufflered, groupsResults)
        summariesThirdJourneyTotal.push(summariesThirdJourney0,summariesThirdJourney1)
    }
    const summariesThirdJourneyTotalSorted = summariesThirdJourneyTotal.sort(orderSummaries)
    teamsWhichPassToPlayOff.push(summariesThirdJourneyTotalSorted[0],summariesThirdJourneyTotalSorted[1])
    console.table(summariesThirdJourneyTotal.sort(orderSummaries)) ////Ordenamos la clasificación de la tercera y última jornada
}
console.log("\n FIN DE LA FASE DE GRUPOS \n")

//Resultados de la fase de grupos
console.log("\n Equipos clasificados de la fase de grupos")
console.table(teamsWhichPassToPlayOff)

//Comienza el playoff
console.log("\n COMIENZO DE LA FASE ELIMINATORIA - PLAYOFF \n")
const teamsPlayOff = teamsWhichPassToPlayOff
console.table(clearSummaries(teamsPlayOff))