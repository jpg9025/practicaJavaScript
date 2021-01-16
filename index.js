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
console.log("\n Equipos clasificados para los octavos de final")
console.table(teamsWhichPassToPlayOff)


//Comienza el playoff
console.log("\n COMIENZO DE LA FASE ELIMINATORIA - PLAYOFF \n")
let teamsPlayOff = clearSummaries(teamsWhichPassToPlayOff)

//Octavos de final
console.log("\n  JUGANDO LOS OCTAVOS DE FINAL \n")
//Se juegan los octavos de final
let teamsWhichPassToRoundOf8 = [] // Array para almacenar los resultados
teamsPlayOff = creatorSchedulePlayOff(teamsPlayOff)
teamsPlayOff.sort(orderSummariesPlayOff)
teamsPlayOff = clearSummaries(teamsPlayOff)
console.log("\n Equipos clasificados para los cuartos de final \n")
for (let i=0;i<=7;i++){
    console.log(teamsPlayOff[i].name)
    teamsWhichPassToRoundOf8.push(teamsPlayOff[i])
}

//Cuartos de final
console.log("\n  JUGANDO LOS CUARTOS DE FINAL \n")
//Se juegan los cuartos de final
let teamsWhichPassToSemifinal = [] // Array vacio para almacenar los resultados 
teamsWhichPassToRoundOf8 = creatorSchedulePlayOff(teamsWhichPassToRoundOf8)
teamsWhichPassToRoundOf8.sort(orderSummariesPlayOff)
teamsWhichPassToRoundOf8 = clearSummaries(teamsWhichPassToRoundOf8)
console.log("\n Equipos clasificados para las semifinales \n")
for (let i=0;i<=3;i++){
    console.log(teamsWhichPassToRoundOf8[i].name)
    teamsWhichPassToSemifinal.push(teamsWhichPassToRoundOf8[i])
}

//Semifinales
console.log("\n  JUGANDO LAS SEMIFINALES \n")
//Se juegan las sefiminales
let teamsWhichPassToFinal = [] // Array vacio para almacenas los equipos de la final
let teamsWhichNOTPassToFinal = [] // Array vacio para almacenar los equipos que NO pasan a la fianal
teamsWhichPassToSemifinal = creatorSchedulePlayOff(teamsWhichPassToSemifinal)
teamsWhichPassToSemifinal.sort(orderSummariesPlayOff)
teamsWhichPassToSemifinal = clearSummaries(teamsWhichPassToSemifinal)
console.log("\n Equipos clasificados para la final \n")
for (let i=0;i<=1;i++){
    console.log(teamsWhichPassToSemifinal[i].name)
    teamsWhichPassToFinal.push(teamsWhichPassToSemifinal[i])
}
console.log("\n Equipos que se disputarán el tercer y cuarto puesto \n")
for (let i=2;i<=3;i++){
    console.log(teamsWhichPassToSemifinal[i].name)
    teamsWhichNOTPassToFinal.push(teamsWhichPassToSemifinal[i])
}

//Tercer y Cuarto puesto
const thirdAndFourthPlace = new PlayOffMatch(teamsWhichPassToFinal[0],teamsWhichNOTPassToFinal[1])
const resultThirdAndFourth = thirdAndFourthPlace.play()
console.log("\nJugando tercer y cuarto puesto\n")
console.log("[ '",teamsWhichNOTPassToFinal[0].name,"', '",teamsWhichNOTPassToFinal[1].name,"' ]")
console.log(`${resultThirdAndFourth.localTeam} ${resultThirdAndFourth.localGoals} - ${resultThirdAndFourth.awayGoals} ${resultThirdAndFourth.awayTeam}`)

//Final
const FinalMatch = new PlayOffMatch(teamsWhichPassToFinal[0],teamsWhichPassToFinal[1])
const finalResult = FinalMatch.play()
console.log("\n JUGANDO LA FINAL DEL TORNEO\n")
console.log("[ '",teamsWhichPassToFinal[0].name,"', '",teamsWhichPassToFinal[1].name,"' ]")
console.log(`${finalResult.localTeam} ${finalResult.localGoals} - ${finalResult.awayGoals} ${finalResult.awayTeam}`)

//Resultados finales
console.log("\n FIN DEL TORNEO \n")
if (finalResult.localGoals>finalResult.awayGoals) {
    console.log(finalResult.localTeam," - Campeón del mundial\n")
    console.log(finalResult.awayTeam," - Subcampeón del mundial\n")
} else if (finalResult.localGoals<finalResult.awayGoals) {
    console.log(finalResult.awayTeam," - Campeón del mundial\n")
    console.log(finalResult.localTeam," - Subcampeón del mundial\n")
}

//Resultados Tercer y Cuarto puesto
if (resultThirdAndFourth.localGoals>resultThirdAndFourth.awayGoals) {
    console.log(resultThirdAndFourth.localTeam," - Tercer clasificado del mundial\n")
    console.log(resultThirdAndFourth.awayTeam," - Cuarto clasificado del mundial\n")
} else if (resultThirdAndFourth.localGoals<resultThirdAndFourth.awayGoals) {
    console.log(resultThirdAndFourth.awayTeam," - Tercer clasificado del mundial\n")
    console.log(resultThirdAndFourth.localTeam," - Cuarto clasificado del mundial\n")
}
