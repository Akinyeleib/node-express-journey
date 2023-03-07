const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

const users = [
    {firstname : "John", lastname : "Doe", age : 23},
    {firstname : "Jane", lastname : "Doe", age : 18}
]

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    const userId = uuidv4();
    const createdUser = req.body;
    users.push({...createdUser, id:userId});
    res.send(`User with name ${createdUser.firstname} added to the database`)
});
  
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
