import { updateTeamsArray0, updateTeamsArray1, teams, orderSummaries } from './teams.js'
import { GroupsMatch, initSchedule , teamsShuffler , groupGenerator, updateTeamsGroups } from './groups.js'
import { Match } from './match.js'
import { clearSummaries, PlayOffMatch } from './playoff.js'

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
console.log("Jugando partido [ '",teamsPlayOff[0].name,"' , '",teamsPlayOff[3].name,"' ]")
const results1 = match1RoundOf16.play()
console.log(results1)
match1RoundOf16.updatePlayOffTeams(results1)
console.log("Jugando partido [ '",teamsPlayOff[1].name,"' , '",teamsPlayOff[2].name,"' ]")
const results2 = match2RoundOf16.play()
console.log(results2)
match2RoundOf16.updatePlayOffTeams(results2)
console.log("Jugando partido [ '",teamsPlayOff[4].name,"' , '",teamsPlayOff[7].name,"' ]")
const results3 = match3RoundOf16.play()
console.log(results3)
match3RoundOf16.updatePlayOffTeams(results3)
console.log("Jugando partido [ '",teamsPlayOff[5].name,"' , '",teamsPlayOff[6].name,"' ]")
const results4 = match4RoundOf16.play()
console.log(results4)
match4RoundOf16.updatePlayOffTeams(results4)
console.log("Jugando partido [ '",teamsPlayOff[8].name,"' , '",teamsPlayOff[11].name,"' ]")
const results5 = match5RoundOf16.play()
console.log(results5)
match5RoundOf16.updatePlayOffTeams(results5)
console.log("Jugando partido [ '",teamsPlayOff[9].name,"' , '",teamsPlayOff[10].name,"' ]")
const results6 = match6RoundOf16.play()
console.log(results6)
match6RoundOf16.updatePlayOffTeams(results6)
console.log("Jugando partido [ '",teamsPlayOff[12].name,"' , '",teamsPlayOff[15].name,"' ]")
const results7 = match7RoundOf16.play()
console.log(results7)
match7RoundOf16.updatePlayOffTeams(results7)
console.log("Jugando partido [ '",teamsPlayOff[13].name,"' , '",teamsPlayOff[14].name,"' ]")
const results8 = match8RoundOf16.play()
console.log(results8)
match8RoundOf16.updatePlayOffTeams(results8)
//Resultados de los octavos de final