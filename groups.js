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

//Creación de los ocho grupos
export const groupGenerator = function (array) {
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
            console.log("\n" + groups[j-1].name + "\n")
            for (let k=1;k<=4;k++) {
                groups[j-1].clubs[k-1]=array[i].name
                console.log(array[i])
                i+=1
            }
            console.log(`--------------`)
        }
    }
    console.log(groups)
    return groups
}

//Creación de la Liga
const localTeam = 0
const awayTeam = 1

export const initSchedule = function(groups) {
    const numberOfMatchDays = groups[0].clubs.length - 1
    const numberOfMatchesPerDay = groups[0].clubs.length / 2
    //Jornada 1
    for (let h=1;h<=8;h++){
        const journey = []
        console.log("Jornada 1 de la fase de grupos - ",groups[h-1].name)
        const match1 = []
        const match2 = []
        match1.push(groups[h-1].clubs[0],groups[h-1].clubs[1])
        match2.push(groups[h-1].clubs[2],groups[h-1].clubs[3])
        journey.push(match1, match2)
        console.log(journey, "\n")
    }
    //Jornada 2
    for (let h=1;h<=8;h++){
        const journey = []
        console.log("Jornada 2 de la fase de grupos - ",groups[h-1].name)
        const match1 = []
        const match2 = []
        match1.push(groups[h-1].clubs[0],groups[h-1].clubs[2])
        match2.push(groups[h-1].clubs[1],groups[h-1].clubs[3])
        journey.push(match1, match2)
        console.log(journey, "\n")
    }
    //Jornada 3
    for (let h=1;h<=8;h++){
        const journey = []
        console.log("Jornada 3 de la fase de grupos - ",groups[h-1].name)
        const match1 = []
        const match2 = []
        match1.push(groups[h-1].clubs[0],groups[h-1].clubs[3])
        match2.push(groups[h-1].clubs[1],groups[h-1].clubs[2])
        journey.push(match1, match2)
        console.log(journey, "\n")
    }
}
export default class League {
    //Jornadas a jugar en la fase de grupos
    
/*
    initSchedule(round) {
        const numberOfMatchDays = this.teams.length - 1
        const numberOfMatchesPerMatchDay = this.teams.length / 2
        for (let i = 0; i < numberOfMatchDays; i++) {
            const matchDay = []  // jornada vacía
            for (let j = 0; j < numberOfMatchesPerMatchDay; j++) {
                const match = ['Equipo local', 'Equipo visitante']  // partido
                matchDay.push(match)
            }
            // una vez añadidos todos los partidos a la jornada
            round.push(matchDay)  // añadimos la jornada a la planificación
        }
    }

    /*constructor(name, teams=[], config={}) {
        super(name, teams, config)
    }

    setup(config) {
        const defaultConfig = {
            rounds: 1,
            pointsPerWin: 3,
            pointsPerDraw: 1,
            pointsPerLose: 0
        }
        this.config = Object.assign(defaultConfig, config)
    }
    goalsCreator() {
        return Math.floor(Math.round(Math.random() * 10))
    }

    play(match) {
        const homeGoals = this.goalsCreator()
        const awayGoals = this.goalsCreator()
        return {
            homeTeam: match[localTeam],
            homeGoals,
            awayTeam: match[awayTeam],
            awayGoals
        }
    }*/
}