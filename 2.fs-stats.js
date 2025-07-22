// This is the syncronous way of calling a file and interacting with it

const fs = require('node:fs');

const stats = fs.statSync('./file.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)