export const updateTeamsGroups = function(results,teamsFiltered) {

  teamsFiltered[0].goalsFor += results.localGoals 
  teamsFiltered[1].goalsAgainst += results.localGoals 
  teamsFiltered[1].goalsFor += results.awayGoals  
  teamsFiltered[0].goalsAgainst += results.awayGoals 
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

export const teams = [
  {
    "name": "Algeria",
    "code": "ALG",
    "points": 0,
    "goalsFor": 0,
    "goalsAgainst": 0,
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