const express = require('express')
const data = require('./data');
const mustacheExpress = require('mustache-express');

const app = express()

app.use(express.static('public'))
app.engine('mustache', mustacheExpress());
app.set('views', './template')
app.set('view engine', 'mustache')


app.get('/', function (req, res) {
    res.render('template', data);
})
app.get('/profile/:name', (request, response) => {
  const profileData = {
    name: request.params.name
  }
  function findUser(user){
    return user.name === profileData.name;
  }
const mansData = data.users.find(findUser)
  response.render('profile', mansData)
})
app.listen(3000, () =>{
  console.log('listening on port 3000');
})
