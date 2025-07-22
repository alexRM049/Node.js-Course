//Task: Make the console log in the text that is saved in 2 files: file.txt and file2.txt.

// this is just for native modules
//that don't have native promises

const fs = require('node:fs/promises')

// You can always use promises this way to.
//const { promisify } = require('node:util')
//const reafilePromise = promisify(fs.readfile)

console.log('reading the fist file...')

fs.readFile('./file.txt', 'utf-8')
    .then(text => {
        console.log('first text:', text)
    })

console.log('-----> Doing things while it reads the file')

console.log('Reading the second file...')
fs.readFile('./file2.txt', 'utf-8')
    .then(text => {
        console.log('second text text:', text)
    })