// synchronous 
// later we will discuss differences and why you should choose one over the other one 
console.log('start')
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `Here is the result : ${second}, ${second}`,
{  flag: 'a' })

console.log('done with this task')
console.log('starting the next one')