const express = require('express');
const path = require('path')
const app = express();

const allRoutes = require('./routes/route')

app.set('view engine', 'ejs')

// console.log(app.get('views'))

app.use(allRoutes)

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})

