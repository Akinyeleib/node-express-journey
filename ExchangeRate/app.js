const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    
    const amount = 25;
    const from = 'GBP';
    const to = 'JPY';
    const API_KEY = 'ad1d4a9f76ab44bd804629301becf695';

    
    const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
    // console.log(url);

    https.get(url, (response) => {

        response.on('data', (data) => {
            // console.log(JSON.parse(data));
            const result = JSON.parse(data).motd;
            // console.log(result.query);
            // res.send(result);
        });

        res.send("Yes");
    });

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

