const express = require('express')
const morgan = require('morgan')
const routes = require('./routes.js')
const path = require('path')
const hbs = require('express-handlebars')
const server = express()

// middlewares
server.use(morgan('dev'));
server.use(express.urlencoded({extended:false}));

server.use(express.static('./static/js'))
server.use(express.static('./static/css'))

// view engine
server.set('view engine', 'hbs')

server.set('views', path.join(__dirname, './views/layouts'))

server.use(routes)

server.get('*', (req, res)=>{
    res.end('rescurso no encontrado')
})

// server config
const config = {
    port: process.env.PORT || 1011,
    host: '127.0.0.1'
}

server.listen(config, ()=>{
    console.log(`SERVER STARTED ON PORT ${config.port}`)
})