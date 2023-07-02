const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT;

console.log(port);

//servir contenido estatico

app.use(express.static('public'))

// app.get('/',  (req, res) => {
//   res.send('Home Page')
// });
app.get('/hola-mundo',  (req, res) => {
    res.send('Hola Mundo')
})
app.get('*',  (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
})
  
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })