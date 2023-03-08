const express = require('express');
const https = require('https');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use(express.urlencoded())

app.get('/add', (req, res) => {
    res.sendFile(__dirname + '/add.html')    
})

app.post('/add', (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const sum = num1 + num2;
    console.log(sum);
    res.send(`Sum of ${num1} and ${num2} is ${sum}`)
})

app.post('/', (req, res) => {

    const api_key = "c9c2256f819372cf07ecaf003105f42e";
    // const cityName = "yaba";
    const cityName = req.body.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;
    
    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data)
            // console.log(weatherData)
            const desc = weatherData.weather[0]["description"];
            const temp = weatherData.main.temp
            const icon = weatherData.weather[0]["icon"];
            const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            res.write(`<p>The weather of ${cityName.toUpperCase()} is ${desc}</p>`);
            res.write(`<p>Temperature is ${temp}</p>`);
            res.write(`<p>Icon is ${icon}</p>`);
            res.write(`<img src="${imgUrl}" alt="${icon}">`);
            res.send();
            
        })
    });

})

const PORT = 8000
app.listen(PORT, (req, res) => console.log(`Server is running on port ${PORT}`));

