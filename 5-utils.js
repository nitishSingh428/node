const names = require('./4-names')
// const {john, peter} = require('./4-names')
const sayHii = require('./2-modules')
// if the module is 2 levels up ../

const data = require('./6-altenative-export');
require('./7-mind-grenade');

console.log(data);

console.log(names);

sayHii('nitish');
sayHii(names.john);
sayHii(names.peter);
// console.log(process);