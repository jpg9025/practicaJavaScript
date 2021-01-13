//Métodos para crear el resumen, no logro hacerlo en un o
export const updateTeamsArray1 = function(teams=[],teamsFiltered=[]) {
  if (teams.name == teamsFiltered.name){
    teams.name = teamsFiltered[1].name
    teams.points = teamsFiltered[1].points 
    teams.goalsFor = teamsFiltered[1].goalsFor 
    teams.goalsAgainst = teamsFiltered[1].goalsAgainst 
    teams.goalsDiff = teamsFiltered[1].goalsDiff
    teams.matchesWon = teamsFiltered[1].matchesWon
    teams.matchesDraw = teamsFiltered[1].matchesDraw
    teams.matchesLost = teamsFiltered[1].matchesLost
  }
  return teams
}

export const updateTeamsArray0 = function(teams=[],teamsFiltered=[]) {
  if (teams.name == teamsFiltered.name){
    teams.name = teamsFiltered[0].name
    teams.points = teamsFiltered[0].points 
    teams.goalsFor = teamsFiltered[0].goalsFor 
    teams.goalsAgainst = teamsFiltered[0].goalsAgainst 
    teams.goalsDiff = teamsFiltered[0].goalsDiff
    teams.matchesWon = teamsFiltered[0].matchesWon
    teams.matchesDraw = teamsFiltered[0].matchesDraw
    teams.matchesLost = teamsFiltered[0].matchesLost
  }
  return teams
}

export const orderSummaries = function(array){
  array.sort(function(team1,team2) {
    for(const i=1;i<Array.length;i++){
      team1=array[i-1]
      team2=array[i]
      if (array[i-1].points > array[i].points) {
        return -1
      } else if (array[i-1].points < array[i].points) {
        return 1
      } else {
        if (array[i-1].goalsDiff > array[i].goalsDiff) {
          return -1
        } else if (array[i-1].goalsDiff < array[i].goalsDiff) {
          return 1
        } else {
          // Orden alfabético
        }
      }
    }
  })
}

/*Array.prototype.sort(function(team1,team2) {
  for(const i=1;i<Array.length;i++){
    team1=array[i-1]
    team2=array[i]
    if (array[i-1].points > array[i].points) {
      return -1
    } else if (array[i-1].points < array[i].points) {
      return 1
    } else {
      if (array[i-1].goalsDiff > array[i].goalsDiff) {
        return -1
      } else if (array[i-1].goalsDiff < array[i].goalsDiff) {
        return 1
      } else {
        // Orden alfabético
      }
    }
  }
})*/

export const teams = [
  {
    "name": "Algeria",
    "code": "ALG",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Côte d'Ivoire",
    "code": "CIV",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Ghana",
    "code": "GHA",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Nigeria",
    "code": "NGA",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Cameroon",
    "code": "CMR",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Japan",
    "code": "JPN",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "South Korea",
    "code": "KOR",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Honduras",
    "code": "HON",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Costa Rica",
    "code": "CRC",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Belgium",
    "code": "BEL",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Germany",
    "code": "GER",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Spain",
    "code": "ESP",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "France",
    "code": "FRA",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Greece",
    "code": "GRE",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Italy",
    "code": "ITA",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Netherlands",
    "code": "NED",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Portugal",
    "code": "POR",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Switzerland",
    "code": "SUI",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Croatia",
    "code": "CRO",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Russia",
    "code": "RUS",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Bosnia-Herzegovina",
    "code": "BIH",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "England",
    "code": "ENG",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Iran",
    "code": "IRN",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Mexico",
    "code": "MEX",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "United States",
    "code": "USA",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Australia",
    "code": "AUS",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Argentina",
    "code": "ARG",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Brazil",
    "code": "BRA",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Chile",
    "code": "CHI",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Uruguay",
    "code": "URU",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Colombia",
    "code": "COL",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  },
  {
    "name": "Ecuador",
    "code": "ECU",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
    "goalsDiff": 0,
    "matchesWon": 0,
    "matchesDraw": 0,
    "matchesLost": 0
  }
]

/*import axios from 'axios'

export function getTeamsWithPromise() {
    const url = 'https://github.com/openfootball/world-cup.json/blob/master/2014/worldcup.teams.json'
    return new Promise(function(resolve, reject) {
        axios.get(url).then(function(response) {
            resolve(response.data.clubs)
        }, function(error) {
            reject(error)
        })
    })
}*/