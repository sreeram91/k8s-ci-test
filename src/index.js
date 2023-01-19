const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.send("success")
})

const port = 3005
 var server = app.listen(port, () => {
    console.log("listening on: ", server.address().port);
 })