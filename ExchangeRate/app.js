const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    
    const amount = amount;
    const from = 'GBP';
    const to = 'JPY';
    const API_KEY = 'tf632wemlVcDz38U2B7evcZsB0fm0CwS';
    const url = `https://api.exchangeratesapi.io/v1/convert?access_key=${API_KEY}&from=${from}&to=${to}&amount=${amount}`

    https.get(url, (response) => {
        response.on('data', (data) => {
            res.send(data);
        })
    });

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

