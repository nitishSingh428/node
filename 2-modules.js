// CommonJS, every file is module (by default)
// Modules  - Encapsulated Code (only share minimum)

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}

// export default
module.exports = sayHi;  // does not require {sayHi} as only one function is there
console.log(module);