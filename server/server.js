require('./config/config');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const puerto = process.env.PORT;

app.get('/', function(req, res) {
    res.json('Hello World')
})
app.get('/usuario', function(req, res) {
    res.json('getUsuarios')
})
app.post('/usuario', function(req, res) {
    const body = req.body;
    const { nombre } = body;

    if (nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            body
        })
    }

})
app.put('/usuario/:id', function(req, res) {
    const id = req.params.id;
    res.json({
        id
    })
})
app.delete('/usuario', function(req, res) {
    res.json('delete usuarios')
})

app.listen(puerto, () => {
    console.log(`Escuchando el puerto ${puerto}`)
})