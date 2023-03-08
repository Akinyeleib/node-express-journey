const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // https://api.exchangeratesapi.io/v1/convert
    // ?access_key = API_KEY
    // &from=GBP
    // & to = JPY
    // & amount = 25
    const apiKey = 'tf632wemlVcDz38U2B7evcZsB0fm0CwS';
    const url = `https://api.exchangeratesapi.io/v1/convert?access_key=${API_KEY}&from={fr}`
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

