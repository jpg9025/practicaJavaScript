import { teams } from './teams.js'
import { initSchedule , teamsShuffler , groupGenerator } from './groups.js'

console.log(teams)

teamsShuffler(teams)

console.log(teams)

groupGenerator(teams)

initSchedule(groupGenerator(teams))