// Carregando Módulos
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const db = require('./models/db')
const profissional = require('./routes/profissional')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const usuarios = require('./routes/usuario')
const passport = require('passport')
require('./config/auth')(passport)

// Config

    // Sessão

        app.use(session({
            secret: '123456workapp',
            resave: true,
            saveUninitialized: true
        }))
        app.use(passport.initialize())
        app.use(passport.session())
        app.use(flash())

    // Middleware

        app.use((req, res, next) => {
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.error = req.flash('error')
            res.locals.user = req.user || null
            next()
        })

    // Template Engine

        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Body-Parser

        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
                
    // Conexão com Banco de Dados MySQL

        const sequelize = new db.Sequelize('workon_app', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        }) 

    // Public

        app.use(express.static(path.join(__dirname,'public')))

    // Rotas

        app.get('/', (req, res) => {
            res.render('index')
        })

        app.get('/404', (req,res) => {
            res.send('Erro 404!')
        })

        app.use('/profissional', profissional)
        app.use('/usuario', usuarios)

    // Socket.io

        io.on('connection', socket => {
            console.log('')
            console.log('🔌 Um usuário foi conectado, id →', socket.id)
            console.log('📁 Room criado com id ~~> ' + socket.id)

            socket.on('disconnect', () => {
                console.log('💤 Usuário disconectado')
              })

            socket.on('chat message', (msg) => {
                console.log('message: ' + msg)
            })

            socket.on('chat message', (msg) => {
                io/*.to(socket.id)*/.emit('chat message', msg);
              });
        })

    // Outros

    server.listen(8081, () => {
        console.log('Servidor Rodando')
    })