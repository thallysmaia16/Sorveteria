const express = require('express')

const server = express()

server.get('login', () =>{
    console.log('Você está acessando a pagina de login')
})

server.get('/index', () =>{
    console.log('Você está acessando a pagina inicial')
})

server.listen(3000)