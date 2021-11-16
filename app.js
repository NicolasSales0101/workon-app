// Carregando Módulos
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const db = require('./models/db')
const profissional = require('./routes/profissional')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const usuarios = require('./routes/usuario')
const passport = require('passport')
require('./config/auth')(passport)
const Chat = require('./models/Chat')
const Mensagem = require('./models/Mensagem')
const chat = require('./routes/chat')

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
        app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

    // Rotas

        app.get('/', (req, res) => {
            res.render('index')
        })

        app.get('/404', (req,res) => {
            res.send('Erro 404!')
        })

        app.use('/profissional', profissional)
        app.use('/usuario', usuarios)
        app.use('/chat', chat)

    // Socket.io

        io.on('connection', socket => {
            console.log('🔌 Um usuário foi conectado, id →', socket.id)

            socket.on('disconnect', () => {
                console.log('💤 Usuário disconectado')
              })

            socket.on('connect_room', function(room) {
                socket.join(room)

                socket.on('private chat message', (msg, sender_id, sender_nome, dataAtual) => {
                    console.log('💬 Message: ' + msg + ' || Sender id: ' + sender_id + ' || Sender name: ' + sender_nome + ' || Data: ' + dataAtual)
                })
    
                socket.on('private chat message', (msg, sender_id, sender_nome, dataAtual) => {
                    Mensagem.create({
                        mensagem: msg,
                        sender_id: sender_id,
                        sender_nome: sender_nome,
                        chat_id: room
                    }).then(() => {
                        io.sockets.in(room).emit('private chat message', msg, sender_id, sender_nome, dataAtual);
                    }).catch((err) => {
                        req.flash('error_msg', 'Ocorreu algum erro no chat ❌, tente usar esse recurso mais tarde...')
                        res.redirect('/profissional/perfil/' + receiver_id)
                    })
                  });
            })
        })  

    // Outros

    server.listen(3000, () => {
        console.log('Servidor Rodando')
    })