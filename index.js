require('dotenv').config()
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public2'))

app.get('/', (req, res)=>{
    res.render('home',{
        nombre: "ivan juzwiak",
        titulo: "curso node"
    });
})

app.get('/generic', (req, res)=>{
    res.render('generic',{
        nombre: "ivan juzwiak",
        titulo: "curso node"
    });
})

app.get('/elements', (req, res)=>{
    res.render('elements',{
        nombre: "ivan juzwiak",
        titulo: "curso node"
    });
})

// app.get('/generic', (req, res)=>{
//     res.sendFile( __dirname + '/public2/generic.html')
// })

// app.get('/elements', (req, res)=>{
//     res.sendFile( __dirname + '/public2/elements.html')
// })

app.get('*',  (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`corriendo en el puerto ${port}`);
})