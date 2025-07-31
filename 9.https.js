const http = require('node:http')

//this is hpow you import a functin from another .js file
const { findAvailablePort } = require('./10.free-port')
//createServer is http dependency funtionality that helps ypu create a server. It takes 2 parameter: the request variable name and the response variable name.
const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hello World')
})

// listen is a funtionality that allows you to tell the sever when to listen for a request. It take port of the server like a parameter.
// by using 0 as a parameter in the listen function, the function will set the first available port that found as the active port for this server.
//use the method of the 0 as the parameter in the listen functionality is not recommended to do in a production project. 
// In these cases, the port must always be definitive. 
/*server.listen(0, () =>{
    console.log(`server listening on port http://localhost:${server.address().port}`) 
})*/

findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`)
    })
})