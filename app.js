const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname+'/public'))

app.listen(8000, () => console.log("Server en el puerto 3000"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/inicio.html'))
})
app.get('/404', (req, res) => {
    res.send('Error página no encontrada')
})
