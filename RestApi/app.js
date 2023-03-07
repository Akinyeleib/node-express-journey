const express = require('express');
const app = express();

const users = [
    {
        firstname : "John",
        lastname : "Doe",
        age : 23
    },
    {
        firstname : "Jane",
        lastname : "Doe",
        age : 18
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send(users);
  });
  
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

