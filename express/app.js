const express = require('express');

const app = express();

// console.log(http);

app.get('/', (req, res) => {
    res.end("I am from the home page")
})

app.get('/cricket', (req, res) => {
    res.end("I am the old cricket page")
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
