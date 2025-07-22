import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

//you can alos use "import os from 'node:os'. with this option, you'll need to call os in each time 
// you  are calling the library."

console.log("OS's Info")
console.log('________________________')

console.log("OS's name:", platform());
console.log("OS's version:", release())
console.log("OS's arch:", arch())
console.log("CPU:", cpus())
console.log("Free memory:", freemem() / 1024 / 1024)
console.log("Total memory:", totalmem() / 1024 / 1024)
console.log("uptime", uptime() / 60 / 60)