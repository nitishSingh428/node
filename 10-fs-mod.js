// synchronous

const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// this will crate one file if not present and will overwrite the content
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

// if flag = a node will append this content
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,{flag: 'a'})
console.log('I\'m done with this task');
console.log('I\' am starting a new task');
