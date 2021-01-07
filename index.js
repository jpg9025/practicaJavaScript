import { teams } from './teams.js'
import { groupGenerator } from './groups.js'

console.log(teams)

const teamsShuffler = function (array) {
    let i = array.length - 1
    for(i; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
teamsShuffler(teams)
console.log(teams)
groupGenerator(teams)

