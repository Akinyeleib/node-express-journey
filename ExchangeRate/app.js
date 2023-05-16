const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

app.use(express.urlencoded())

app.get('/currency', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/currency', (req, res) => {

    const body = req.body;
    const from = body.from;
    const to = body.to;
    const amount = body.amount;
    // console.log(amount, from, to);

    const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
    console.log(url)

    https.get(url, (response) =>{
        // console.log(response)
        response.on('data', (data) => {
            // console.log(JSON.parse(data));
            const result = JSON.parse(data);
            console.log("complete")
        });
    });
    
    res.send("<h1>Currency Page</h1>");

})

app.get('/', (req, res) => {
    res.send("Welcome to homepage");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

