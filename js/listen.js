const http = require('http')

// console.log(http)

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.write("Home page...");
    } else {
        res.write("Unknown Page...");
    }
    res.end();
});

server.on('connection', (socket) => {
    console.log("New Connection");
});

server.listen(3000);

console.log('Listening on port 3000...')
