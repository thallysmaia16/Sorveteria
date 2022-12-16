const express = require('express')
const path = require('path')
const server = express()

server.get('login', (req, res) =>{
    res.sendFile(path.join(__dirname+'/../login.html'))
})

server.get('/index', (req, res) =>{
    res.sendFile(path.join(__dirname+'/../index.html'))
})

server.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname+'/../register.html'))
})

server.listen(3000)