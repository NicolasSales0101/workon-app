const express = require('express')
const router = express.Router()
const Chat = require('../models/Chat')
const { Op } = require("sequelize")
const Mensagem = require('../models/Mensagem')

router.get('/', (req, res) => {
    Chat.findAll({where: {sender_id: req.user.id}, include: [{model: Mensagem, as: 'Mensagens', limit: 1, order: [['createdAt', 'DESC']]}]}).then((chats_sender) => {  
        Chat.findAll({where: {receiver_id: req.user.id}, include: [{model: Mensagem, as: 'Mensagens', limit: 1, order: [['createdAt', 'DESC']]}]}).then((chats_receiver) => {
            Chat.findAll({where: {[Op.or]: [{sender_id: req.user.id}, {receiver_id: req.user.id}]}}).then((ifExist) => {
                res.render('chat/index', {chats_sender: chats_sender, chats_receiver: chats_receiver, user: req.user, ifExist: ifExist})
            })
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao carregar a página das conversas --> receiver')
            res.redirect('/')
        })
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro ao carregar a página das conversas --> sender')
        res.redirect('/')
    })
})

router.post('/new', (req, res) => {
    Chat.findOne({where: {
                        [Op.or]: [{sender_id: req.body.emissor_id, receiver_id: req.body.receptor_id}, {sender_id: req.body.receptor_id, receiver_id: req.body.emissor_id}]
                        }
                }).then((chat) => {
        if(chat) {
            res.redirect('/chat/' + chat.id)
        } else {
            Chat.create({
                sender_id: req.body.emissor_id,
                sender_nome: req.body.emissor_nome,
                sender_img: req.body.emissor_img,
                receiver_id: req.body.receptor_id,
                receiver_nome: req.body.receptor_nome,
                receiver_img: req.body.receptor_img
            }).then((nowchat) => {
                res.redirect('/' + nowchat.id + '/' + nowchat.receiver_nome)
            }).catch((err) => {
                console.log(err)
                req.flash('error_msg', 'Houve um erro ao carregar o chat')
                res.redirect('/usuario/profissional/' + req.body.receptor_id)
            })
        }   
    })
})

router.get('/:chat_id/:person', (req, res) => {
    Chat.findOne({where: {id: req.params.chat_id}}).then((chat) => {
        Mensagem.findAll({where: {chat_id: chat.id}}).then((mensagens) => {
            var nickname = req.params.person
            res.render('chat/private_chat', {chat: chat, mensagens: mensagens, nickname: nickname})
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao carregar as mensagens de sua conversa ❌ Tente novamente mais tarde...')
            res.redirect('/chat')
        })
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro ao carregar o chat privado ❌ Tente novamente mais tarde...')
        res.redirect('/chat')
    })
})

module.exports = router