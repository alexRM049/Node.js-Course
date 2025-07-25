// This is an app the does the same function as the "ls " command. It shows you all contents of a directory

//const fs = require('node:fs')

// what this does is that it holds the directory that it is passed to it as:
// process.argv[0]: will always be the path to the Node.js executable (by default).
// process.argv[1]` will always be the path to the JavaScript file being executed (by default).
// process.argv[2] can be what ever path you wish it to be passing it to as data entry when the app is
const folder = process.argv[2] ?? '.'

// readdir reads the contents of a given directory. 
// The first parameter is the directory that is going to read ( . means read the current directory the file is in) 
// The second parameter is what tipe of content is it going to read, alog the error parameter.
/*fs.readdir(folder, (err, files) => {
    if (err) {
        console.log("Error while reading the directory")
        return;
    }

    files.forEach(files => {
        console.log(files)
    })
})*/

//This how to do the same process using Try-Catch

//To use the then-catch funtionality, we must use promises.
const fs = require('node:fs/promises')

fs.readdir(folder)
    .then(files => {
        files.forEach(files => {
            console.log(files)
        })
    })
    .catch(err => {
        if (err) {
            console.error("Error! couldn't read the directory")
        }
    })