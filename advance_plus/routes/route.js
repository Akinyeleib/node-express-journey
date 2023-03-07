const router = require('express').Router();
const key = require('../middleware/apikey')

router.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname + '/index.html'))
    res.render('index', {
        name:'Chief Adeshina',
        title: 'Express | Home'
    });
});

router.get('/about', (req, res) => {
    res.render('about.ejs', {
        title: 'Express | About'
    });
});

router.get('/api/products', key, (req, res) => {
    res.json([ 
        {
            id: 1,
            name : "Leather bag"
        },
        {
            id: 2,
            name : "Gold Wrist-watch"
        },
        {
            id: 3,
            name : "Racket"
        }
    ]);
});

router.get('*', (req, res) => res.send('<h1 style="color:red">404 Error Page not found!</h1>'))

module.exports = router;
