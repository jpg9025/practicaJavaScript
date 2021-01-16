import { updateTeamsArray0, updateTeamsArray1, teams, orderSummaries, orderSummariesPlayOff } from './teams.js'
import { GroupsMatch, initSchedule , teamsShuffler , groupGenerator, updateTeamsGroups } from './groups.js'
import { Match } from './match.js'
import { clearSummaries, creatorSchedulePlayOff, PlayOffMatch, updateSummaries, teamsFor3and4Position } from './playoff.js'

//Imprimimos todos los equipos sin mezclar
console.log("\n EQUIPOS PARTICIPANTES \n")
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
        const results = currentMatch.play() //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        const summariesFirstJourney0 = updateTeamsArray0(teamsShufflered, groupsResults)
        const summariesFirstJourney1 = updateTeamsArray1(teamsShufflered, groupsResults)
        summariesFirstJourneyTotal.push(summariesFirstJourney0,summariesFirstJourney1)
        console.log(`${results.localTeam} ${results.localGoals} - ${results.awayGoals} ${results.awayTeam}`)
    }
    console.log("\n CLASIFICACIÓN ACTUAL DEL GRUPO \n")
    console.table(summariesFirstJourneyTotal.sort(orderSummaries)) //Ordenamos la clasificación de la primera jornada
}

//Jornada 2
console.log("\n JUGANDO SEGUNDA JORNADA DE LA FASE DE GRUPOS \n")
for (let i = ((journeyPlanification.length)/3);i<(2*(journeyPlanification.length)/3); i++){
    const summariesSecondJourneyTotal = []
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play() //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        const summariesSecondJourney0 = updateTeamsArray0(teamsShufflered, groupsResults)
        const summariesSecondJourney1 = updateTeamsArray1(teamsShufflered, groupsResults)
        summariesSecondJourneyTotal.push(summariesSecondJourney0,summariesSecondJourney1)
        console.log(`${results.localTeam} ${results.localGoals} - ${results.awayGoals} ${results.awayTeam}`)
    }
    console.log("\n CLASIFICACIÓN ACTUALIZADA DEL GRUPO \n")
    console.table(summariesSecondJourneyTotal.sort(orderSummaries)) //Ordenamos la clasificación de la segunda jornada
}

//Jornada 3
console.log("\n JUGANDO TERCERA JORNADA DE LA FASE DE GRUPOS \n")
for (let i = (2*(journeyPlanification.length)/3);i<journeyPlanification.length; i++){
    const summariesThirdJourneyTotal = []
    for (let j=0;j<journeyPlanification[i].length;j++){
        const currentMatch = new GroupsMatch (journeyPlanification[i][j][0],journeyPlanification[i][j][1])
        console.log("Jugando partido",journeyPlanification[i][j])
        const results = currentMatch.play() //Jugamos la liga
        const teamsFiltered = currentMatch.getTeamForName(teams) //Filtramos los equipos del array de equipos para incluir los resultados
        const groupsResults = updateTeamsGroups(results,teamsFiltered) //Actualizamos el golaverage de los equipos 
        const summariesThirdJourney0 = updateTeamsArray0(teamsShufflered, groupsResults)
        const summariesThirdJourney1 = updateTeamsArray1(teamsShufflered, groupsResults)
        summariesThirdJourneyTotal.push(summariesThirdJourney0,summariesThirdJourney1)
        console.log(`${results.localTeam} ${results.localGoals} - ${results.awayGoals} ${results.awayTeam}`)
    }
    const summariesThirdJourneyTotalSorted = summariesThirdJourneyTotal.sort(orderSummaries)
    teamsWhichPassToPlayOff.push(summariesThirdJourneyTotalSorted[0],summariesThirdJourneyTotalSorted[1])
    console.log("\n CLASIFICACIÓN FINAL DEL GRUPO \n")
    console.table(summariesThirdJourneyTotal.sort(orderSummaries)) ////Ordenamos la clasificación de la tercera y última jornada
}
console.log("\n FIN DE LA FASE DE GRUPOS \n")

//Resultados de la fase de grupos
console.log("\n Equipos clasificados de la fase de grupos")
console.table(teamsWhichPassToPlayOff)

//Comienza el playoff
console.log("\n COMIENZO DE LA FASE ELIMINATORIA - PLAYOFF \n")
let teamsPlayOff = clearSummaries(teamsWhichPassToPlayOff)

//Octavos de final
console.log("\n  JUGANDO LOS OCTAVOS DE FINAL \n")

//Se juegan los octavos de final
let teamsWhichPassToRoundOf4 = [] // Array para almacenar todos los resultados
teamsPlayOff = creatorSchedulePlayOff(teamsPlayOff)
teamsPlayOff.sort(orderSummariesPlayOff)
teamsPlayOff = clearSummaries(teamsPlayOff)
console.log("\n Equipos clasificados de los octavos de final \n")
for (let i=0;i<=7;i++){
    console.log(teamsPlayOff[i].name)
    teamsWhichPassToRoundOf4.push(teamsPlayOff[i])
}

/*
//Cuartos de final
console.log("\n  JUGANDO LOS CUARTOS DE FINAL \n")
const roundOf8Results = [] // arraay vacío para los resultados
teamsWhichPassToRounfOf8 = clearSummaries(teamsWhichPassToRounfOf8)
//Planificación de los octavos de final
const match1RoundOf8 = new PlayOffMatch (teamsWhichPassToRounfOf8[0],teamsWhichPassToRounfOf8[1])
const match2RoundOf8 = new PlayOffMatch (teamsWhichPassToRounfOf8[2],teamsWhichPassToRounfOf8[3])
const match3RoundOf8 = new PlayOffMatch (teamsWhichPassToRounfOf8[4],teamsWhichPassToRounfOf8[5])
const match4RoundOf8 = new PlayOffMatch (teamsWhichPassToRounfOf8[6],teamsWhichPassToRounfOf8[7])

//Se juegan los cuartos de final
console.log("Jugando partido [ '",teamsWhichPassToRounfOf8[0].name,"' , '",teamsWhichPassToRounfOf8[1].name,"' ]")
const results9 = match1RoundOf8.play()
roundOf8Results.push(match1RoundOf8.localTeam, match1RoundOf8.awayTeam)
console.log(`${results9.localTeam} ${results9.localGoals} - ${results9.awayGoals} ${results9.awayTeam} \n`)
match1RoundOf8.updatePlayOffTeams(results9)

console.log("Jugando partido [ '",teamsWhichPassToRounfOf8[2].name,"' , '",teamsWhichPassToRounfOf8[3].name,"' ]")
const results10 = match2RoundOf8.play()
roundOf8Results.push(match2RoundOf8.localTeam, match2RoundOf8.awayTeam)
console.log(`${results10.localTeam} ${results10.localGoals} - ${results10.awayGoals} ${results10.awayTeam} \n`)
match2RoundOf8.updatePlayOffTeams(results10)

console.log("Jugando partido [ '",teamsWhichPassToRounfOf8[4].name,"' , '",teamsWhichPassToRounfOf8[5].name,"' ]")
const results11 = match3RoundOf8.play()
roundOf8Results.push(match3RoundOf8.localTeam, match3RoundOf8.awayTeam)
console.log(`${results11.localTeam} ${results11.localGoals} - ${results11.awayGoals} ${results11.awayTeam} \n`)
match3RoundOf8.updatePlayOffTeams(results11)

console.log("Jugando partido [ '",teamsWhichPassToRounfOf8[6].name,"' , '",teamsWhichPassToRounfOf8[7].name,"' ]")
const results12 = match4RoundOf8.play()
roundOf8Results.push(match4RoundOf8.localTeam, match4RoundOf8.awayTeam)
console.log(`${results12.localTeam} ${results12.localGoals} - ${results12.awayGoals} ${results12.awayTeam} \n`)
match4RoundOf8.updatePlayOffTeams(results12)

//Resultados de los cuartos de final
console.log("\n Equipos clasificados para las semifinales")
let teamsWhichPassToRounfOf4 = []
teamsWhichPassToRounfOf4 = updateSummaries(teamsWhichPassToRounfOf4,roundOf8Results)
console.log("\n",teamsWhichPassToRounfOf4[0].name,"\n",teamsWhichPassToRounfOf4[1].name,"\n",teamsWhichPassToRounfOf4[2].name,"\n",teamsWhichPassToRounfOf4[3].name,"\n")

//Semifinales
console.log("\n  JUGANDO LAS SEMIFINALES \n")
const roundOf4Results = [] // arraay vacío para los resultados
teamsWhichPassToRounfOf4 = clearSummaries(teamsWhichPassToRounfOf4)
//Planificación de los octavos de final
const match1RoundOf4 = new PlayOffMatch (teamsWhichPassToRounfOf4[0],teamsWhichPassToRounfOf4[1])
const match2RoundOf4 = new PlayOffMatch (teamsWhichPassToRounfOf4[2],teamsWhichPassToRounfOf4[3])

//Se juegan las semifinales
console.log("Jugando partido [ '",teamsWhichPassToRounfOf4[0].name,"' , '",teamsWhichPassToRounfOf4[1].name,"' ]")
const results13 = match1RoundOf4.play()
roundOf4Results.push(match1RoundOf4.localTeam, match1RoundOf4.awayTeam)
console.log(`${results13.localTeam} ${results13.localGoals} - ${results13.awayGoals} ${results13.awayTeam} \n`)
match1RoundOf4.updatePlayOffTeams(results13)

console.log("Jugando partido [ '",teamsWhichPassToRounfOf4[2].name,"' , '",teamsWhichPassToRounfOf4[3].name,"' ]")
const results14 = match2RoundOf4.play()
roundOf4Results.push(match2RoundOf4.localTeam, match2RoundOf4.awayTeam)
console.log(`${results14.localTeam} ${results14.localGoals} - ${results14.awayGoals} ${results14.awayTeam} \n`)
match2RoundOf4.updatePlayOffTeams(results14)

//Resultados de las semifinales
console.log("\n Equipos clasificados para la final")
let teamsWhichPassToFinalRound = []
teamsWhichPassToFinalRound = updateSummaries(teamsWhichPassToFinalRound,roundOf4Results)
console.log("\n",teamsWhichPassToFinalRound[0].name,"\n",teamsWhichPassToFinalRound[1].name,"\n")

console.log("\n Equipos a disputarse el tercer y cuarto puesto")
let teamsWhichNOTPassToFinalRound = []
teamsWhichNOTPassToFinalRound = teamsFor3and4Position(teamsWhichNOTPassToFinalRound, roundOf4Results)
console.log("\n",teamsWhichNOTPassToFinalRound[0].name,"\n",teamsWhichNOTPassToFinalRound[1].name,"\n")

//Tercer y cuarto puesto*/

