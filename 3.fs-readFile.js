//Task: Make the console log in the text that is saved in 2 files: file.txt and file2.txt.

// Sync vs Async
const fs = require('node:fs')

// to use promises
//const {promisify} = require('node:util')
//const reafilePromise = promisify(fs.readfile)
//_________________________Sync____________________________________

/*const text = fs.readFileSync('./file.txt', 'utf-8')

console.log(text)

const text2 = fs.readFileSync('./file2.txt', 'utf-8')

console.log(text2)*/


//_________________________ASync_____________________________________

console.log('reading the fist file...')

fs.readFile('./file.txt', 'utf-8', (err, text) => {  // <------------------- execute the callback
    console.log('First text: ', text)
})

console.log('-----> Doing things while it reads the file')

console.log('Reading the seconfd file...')
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
    console.log('Second text:', text)
})