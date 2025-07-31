const http = require('node:http')

//createServer is http dependency funtionality that helps ypu create a server. It takes 2 parameter: the request variable name and the response variable name.
const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hello World')
})

// listen is a funtionality that allows you to tell the sever when to listen for a request. It take port of the server like a parameter.
// by using 0 as a parameter in the listen function, the function will set as first available port that found as the active port for this server.
server.listen(0, () =>{
    console.log(`server listening on port http://localhost:${server.address().port}`) 
})