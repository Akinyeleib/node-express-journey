const http = require('http');
const url = require('url');

// console.log(http);

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end("Hello World again!...");
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});

// server.on('connection', (socket) => {
//     console.log("New Connection");
// });

// server.listen(3000);
