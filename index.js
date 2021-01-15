import { updateTeamsArray0, updateTeamsArray1, teams, orderSummaries } from './teams.js'
import { GroupsMatch, initSchedule , teamsShuffler , groupGenerator, updateTeamsGroups } from './groups.js'
import { Match } from './match.js'
import { clearSummaries, PlayOffMatch, updateSummaries, teamsFor3and4Position } from './playoff.js'

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
const teamsPlayOff = clearSummaries(teamsWhichPassToPlayOff)

//Octavos de final
console.log("\n  JUGANDO LOS OCTAVOS DE FINAL \n")
//Planificación de los octavos de final
const match1RoundOf16 = new PlayOffMatch (teamsPlayOff[0],teamsPlayOff[3])
const match2RoundOf16 = new PlayOffMatch (teamsPlayOff[1],teamsPlayOff[2])
const match3RoundOf16 = new PlayOffMatch (teamsPlayOff[4],teamsPlayOff[7])
const match4RoundOf16 = new PlayOffMatch (teamsPlayOff[5],teamsPlayOff[6])
const match5RoundOf16 = new PlayOffMatch (teamsPlayOff[8],teamsPlayOff[11])
const match6RoundOf16 = new PlayOffMatch (teamsPlayOff[9],teamsPlayOff[10])
const match7RoundOf16 = new PlayOffMatch (teamsPlayOff[12],teamsPlayOff[15])
const match8RoundOf16 = new PlayOffMatch (teamsPlayOff[13],teamsPlayOff[14])

//Se juegan los octavos de final
const roundOf16Results = [] // Array para almacenar todos los resultados
console.log("Jugando partido [ '",teamsPlayOff[0].name,"' , '",teamsPlayOff[3].name,"' ]")
const results1 = match1RoundOf16.play()
roundOf16Results.push(match1RoundOf16.localTeam, match1RoundOf16.awayTeam)
console.log(`${results1.localTeam} ${results1.localGoals} - ${results1.awayGoals} ${results1.awayTeam} \n`)
match1RoundOf16.updatePlayOffTeams(results1)

console.log("Jugando partido [ '",teamsPlayOff[1].name,"' , '",teamsPlayOff[2].name,"' ]")
const results2 = match2RoundOf16.play()
roundOf16Results.push(match2RoundOf16.localTeam, match2RoundOf16.awayTeam)
console.log(`${results2.localTeam} ${results2.localGoals} - ${results2.awayGoals} ${results2.awayTeam} \n`)
match2RoundOf16.updatePlayOffTeams(results2)

console.log("Jugando partido [ '",teamsPlayOff[4].name,"' , '",teamsPlayOff[7].name,"' ]")
const results3 = match3RoundOf16.play()
roundOf16Results.push(match3RoundOf16.localTeam, match3RoundOf16.awayTeam)
console.log(`${results3.localTeam} ${results3.localGoals} - ${results3.awayGoals} ${results3.awayTeam} \n`)
match3RoundOf16.updatePlayOffTeams(results3)

console.log("Jugando partido [ '",teamsPlayOff[5].name,"' , '",teamsPlayOff[6].name,"' ]")
const results4 = match4RoundOf16.play()
roundOf16Results.push(match4RoundOf16.localTeam, match4RoundOf16.awayTeam)
console.log(`${results4.localTeam} ${results4.localGoals} - ${results4.awayGoals} ${results4.awayTeam} \n`)
match4RoundOf16.updatePlayOffTeams(results4)

console.log("Jugando partido [ '",teamsPlayOff[8].name,"' , '",teamsPlayOff[11].name,"' ]")
const results5 = match5RoundOf16.play()
roundOf16Results.push(match5RoundOf16.localTeam, match5RoundOf16.awayTeam)
console.log(`${results5.localTeam} ${results5.localGoals} - ${results5.awayGoals} ${results5.awayTeam} \n`)
match5RoundOf16.updatePlayOffTeams(results5)

console.log("Jugando partido [ '",teamsPlayOff[9].name,"' , '",teamsPlayOff[10].name,"' ]")
const results6 = match6RoundOf16.play()
roundOf16Results.push(match6RoundOf16.localTeam, match6RoundOf16.awayTeam)
console.log(`${results6.localTeam} ${results6.localGoals} - ${results6.awayGoals} ${results6.awayTeam} \n`)
match6RoundOf16.updatePlayOffTeams(results6)

console.log("Jugando partido [ '",teamsPlayOff[12].name,"' , '",teamsPlayOff[15].name,"' ]")
const results7 = match7RoundOf16.play()
roundOf16Results.push(match7RoundOf16.localTeam, match7RoundOf16.awayTeam)
console.log(`${results7.localTeam} ${results7.localGoals} - ${results7.awayGoals} ${results7.awayTeam} \n`)
match7RoundOf16.updatePlayOffTeams(results7)

console.log("Jugando partido [ '",teamsPlayOff[13].name,"' , '",teamsPlayOff[14].name,"' ]")
const results8 = match8RoundOf16.play()
roundOf16Results.push(match8RoundOf16.localTeam, match8RoundOf16.awayTeam)
console.log(`${results8.localTeam} ${results8.localGoals} - ${results8.awayGoals} ${results8.awayTeam} \n`)
match8RoundOf16.updatePlayOffTeams(results8)

//Resultados de los octavos de final
console.log("\n Equipos clasificados para cuartos de final")
let teamsWhichPassToRounfOf8 = []
teamsWhichPassToRounfOf8 = updateSummaries(teamsWhichPassToRounfOf8,roundOf16Results)
console.table(teamsWhichPassToRounfOf8)


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
console.table(teamsWhichPassToRounfOf4)

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
console.table(teamsWhichPassToFinalRound)

console.log("\n Equipos a disputarse el tercer y cuarto puesto")
let teamsWhichNOTPassToFinalRound = []
teamsWhichNOTPassToFinalRound = teamsFor3and4Position(teamsWhichNOTPassToFinalRound, roundOf4Results)
console.table(teamsWhichNOTPassToFinalRound)