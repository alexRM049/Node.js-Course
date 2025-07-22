//Task: Make the console log in the text that is saved in 2 files: file.txt and file2.txt.

//const {promisify} = require('node:util')
//const reafilePromise = promisify(fs.readfile)

import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./file.txt', 'utf-8'),
    readFile('./file2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('first text:', text);
    console.log('second text:', secondText)
})



/*console.log('reading the fist file...')

const text = await readFile('./file.txt', 'utf-8')
console.log('First text:', text)

console.log('-----> Doing things while it reads the file')

console.log('Reading the second file...')
const secondText = await readFile('./file2.txt', 'utf-8')
console.log('Second text: ', secondText)*/