import { Match } from './match.js'

//Definimos las configuración para los partidos de fase de grupos
export class GroupsMatch extends Match {
    constructor (localTeam, awayTeam){
        super(localTeam, awayTeam)
    }
}

//Mezclado aleatorio de los equipos
export const teamsShuffler = function (array) {
    let i = array.length - 1
    for(i ;i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
//Otra forma de mezclar - Al prototipo de los arrays le añadimos el método shuffle y así todos los arrays tienen el método shuffle (es común hacer esto)
/*Array.prototype.shuffle = function(){
    var i = this.length
    while (i){
        var j = Matth.floor(Math.random()*i)
        var t = this[--i]
        this[i]=this[j]
        this[j]=t
    }
    return this
}*/

//Creación de los ocho grupos
export const groupGenerator = function (array) {
    console.log("\n\n RESULTADO DEL SORTEO DE GRUPOS")
    let groups = [
        {"name":"Grupo A","clubs":[]},
        {"name":"Grupo B","clubs":[]},
        {"name":"Grupo C","clubs":[]},
        {"name":"Grupo D","clubs":[]},
        {"name":"Grupo E","clubs":[]},
        {"name":"Grupo F","clubs":[]},
        {"name":"Grupo G","clubs":[]},
        {"name":"Grupo H","clubs":[]}
    ]
    
    let i=0
    while(i<32){
        for (let j=1;j<=8;j++){
            console.log("\n", groups[j-1].name,"\n")
            for (let k=1;k<=4;k++) {
                groups[j-1].clubs[k-1]=array[i].name
                console.log(array[i].name," - ",array[i].code)
                i+=1
            }
        }
    }
    console.log("\n")
    return groups
}

//Creación de la Liga
export const initSchedule = function(groups) {
    const numberOfMatchDays = groups[0].clubs.length - 1
    const numberOfMatchesPerDay = groups[0].clubs.length / 2
    const journeySchedule = []

    console.log("\n PLANIFICACIÓN DE LAS JORNADAS DE LA FASE DE GRUPOS \n")
    //Jornada 1
    for (let h=1;h<=8;h++){
        const journey1 = []
        console.log("Jornada 1 de la fase de grupos - ",groups[h-1].name)
        const match1 = []
        const match2 = []
        match1.push(groups[h-1].clubs[0],groups[h-1].clubs[1])
        match2.push(groups[h-1].clubs[2],groups[h-1].clubs[3])
        journey1.push(match1, match2)
        console.log(journey1, "\n")
        journeySchedule.push(journey1)
    }

    //Jornada 2
    for (let h=1;h<=8;h++){
        const journey2 = []
        console.log("Jornada 2 de la fase de grupos - ",groups[h-1].name)
        const match1 = []
        const match2 = []
        match1.push(groups[h-1].clubs[0],groups[h-1].clubs[2])
        match2.push(groups[h-1].clubs[1],groups[h-1].clubs[3])
        journey2.push(match1, match2)
        console.log(journey2, "\n")
        journeySchedule.push(journey2)
    }
    

    //Jornada 3
    for (let h=1;h<=8;h++){
        const journey3 = []
        console.log("Jornada 3 de la fase de grupos - ",groups[h-1].name)
        const match1 = []
        const match2 = []
        match1.push(groups[h-1].clubs[0],groups[h-1].clubs[3])
        match2.push(groups[h-1].clubs[1],groups[h-1].clubs[2])
        journey3.push(match1, match2)
        console.log(journey3, "\n")
        journeySchedule.push(journey3)
    }
    //console.log(journeySchedule)
    return journeySchedule
}

//La función updateTeamsGroups debe ser independiente de la clase de objetos Match y GroupsMatch porque compara arrays de equipos
export const updateTeamsGroups = function(results,teamsFiltered) {
    teamsFiltered[0].goalsFor += results.localGoals 
    teamsFiltered[1].goalsAgainst += results.localGoals 
    teamsFiltered[1].goalsFor += results.awayGoals  
    teamsFiltered[0].goalsAgainst += results.awayGoals 
    teamsFiltered[0].goalsDiff = teamsFiltered[0].goalsFor - teamsFiltered[0].goalsAgainst
    teamsFiltered[1].goalsDiff = teamsFiltered[1].goalsFor - teamsFiltered[1].goalsAgainst
    if (results.localGoals > results.awayGoals) { // Gana equipo local
      teamsFiltered[0].points += 3
      teamsFiltered[0].matchesWon += 1
      teamsFiltered[1].matchesLost += 1
    } else if (results.awayGoals > results.localGoals) { // Gana equipo visitante
      teamsFiltered[1].points += 3
      teamsFiltered[1].matchesWon += 1
      teamsFiltered[0].matchesLost += 1
    } else if (results.awayGoals == results.localGoals) { // Empatan
      teamsFiltered[0].points += 1 
      teamsFiltered[1].points += 1
      teamsFiltered[1].matchesDraw += 1
      teamsFiltered[0].matchesDraw += 1
    }
    return teamsFiltered
}
