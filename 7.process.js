// process.argv: It returns the file paths of where the file is being executed and where the Node.js executable.
// `process.argv[0]` will always be the path to the Node.js executable.
// `process.argv[1]` will always be the path to the JavaScript file being executed.
console.log(process.argv)

// process control and when it ruin ends
// process.exit(1) means the process was terminated with abnormal issue
// process.exit(0) means the process was terminated with no issues
//process.exit(0)

// control the process events
//process.on('exit', () => {
//clear out resorces 
//})

// current workind directory
console.log(process.cwd())