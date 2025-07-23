// This is an app the does the same function as the "ls " command. It shows you all contents of a directory

const fs = require('node:fs')

// readdir reads the contents of a given directory. 
// The first parameter is the directory that is going to read ( . means read the current directory the file is in) 
// The second parameter is what tipe of content is it going to read, alog the error parameter.
fs.readdir('.', (err, files) => {
    if (err) {
        console.log("Error while reading the directory")
        return;
    }

    files.forEach(files => {
        console.log(files)
    })
})