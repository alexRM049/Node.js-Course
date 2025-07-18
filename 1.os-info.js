// Create an app that can access the OS of the system and retrieve the OS's name, version, 
// architecture, cpu count, free memory and total memory

console.log("aaa")
const os = require('node:os')

console.log("OS's Info")
console.log('________________________')

console.log("OS's name:", os.platform());
console.log("OS's version:", os.release())
console.log("OS's arch:", os.arch())
console.log("CPU:", os.cpus())
console.log("Free memory:", os.freemem() / 1024 / 1024)
console.log("Total memory:", os.totalmem() / 1024 / 1024)
console.log("uptime", os.uptime() / 60 / 60)