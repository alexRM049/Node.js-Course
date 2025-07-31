// This is an app the does the same function as the "ls " command. It shows you all contents of a directory.
// This is a more advanced version than 8.ls-advanced

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
const path = require('node:path')
const pc = require('picocolors')

async function ls(directory) {

    let files

    //the Try-catch must be used here as "readdir" can make the app crash if the folder provided is not found
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(pc.red("The provided directory could no be read: ", folder))
        process.exit(1)
    }
    // We use map because it retrieves all the data at once (Asyncronously). which makes the process faster.
    const filespromises = files.map(async file => {

        //This returns the route of the files we are goinf to list when we read the dirtectory.
        const filePath = path.join(folder, file)
        let stats
        try {
            //retrieve the file's information
            stats = await fs.stat(filePath) // stat = information
        } catch {
            console.error(pc.red("Directory provided could not be read: ", filePath))
            process.exit(1)
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`
    })

    const filesInfo = await Promise.all(filespromises)

        .
        filesInfo.forEach(filesInfo => console.log(filesInfo))
}

ls(folder)


