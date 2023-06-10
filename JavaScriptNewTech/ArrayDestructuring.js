const scores = [929321,899341,888336,772739,543671,243567,111934]

const highScore = scores[0];
const secondHighScore = scores[1]

console.log(highScore)
console.log(secondHighScore)

const [gold,sliver,...everyoneElse] = scores;

console.log(gold)
console.log(sliver)
console.log(everyoneElse)
const obj = [...everyoneElse]
