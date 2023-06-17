// GLOBALS - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
setInterval(()=>{
    console.log('Hello world!!');
},1000)  // after every 1 sec Hello world!! will be printed 

setTimeout(()=>{
    console.log("hii");
},5000);   // "hii" will be printed only after 5 sec