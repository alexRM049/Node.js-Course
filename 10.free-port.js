// create an app that, when given a definitive port, if that port is not available, give a different port that is
// net is another dependency that can be used to create servers
const net = require('node:net')

function findAvailablePort (desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })
        server.on('error', (err) => {
            if (err.code == 'EADDRINSE') {
                findAvailablePort(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        })
    })
}

// this is how you export a function to be used in another .js file

module.exports = { findAvailablePort }