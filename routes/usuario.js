const express = require('express')
const router = express.Router()
const sequelize = require('sequelize')
const Usuario = require ('../models/Usuario')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { where } = require('sequelize')

router.get('/registro', (req, res) => {
    res.render('usuarios/registro')
})

router.post('/registro', (req, res) => {
        var erros = []

        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
            erros.push({texto: 'Nome inválido'})
        }

        if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
            erros.push({texto: 'E-mail inválido'})
        }

        if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
            erros.push({texto: 'Senha inválido'})
        }

        if(req.body.senha.lenght < 4){
            erros.push({texto: 'Senha muito curta'})
        }

        if(req.body.senha != req.body.senha2){
            erros.push({texto: 'As senhas são diferentes!'})
        }

        if(erros.lenght > 0){
            res.render('/registro', {erros: erros})
        } else {
            Usuario.findOne({where: {email: req.body.email}}).then((usuario) => {
                if(usuario){
                    req.flash('error_msg', 'Já existe uma conta com este e-mail')
                    res.redirect('/usuario/registro')
                } else {
                    /* Criação do usuario */
                    /* Observação: modificar para se integrar com Sequelize, pois existem funções do mongoose neste código */
                    
                    bcrypt.genSalt(10, (erro, salt) => {
                        bcrypt.hash(req.body.senha, salt, (erro, hash) => {
                            if(erro){
                                req.flash('error_msg', 'Houve um erro durante o salvamento')
                                res.redirect('/')
                            } 
                            Usuario.create({
                                nome: req.body.nome,
                                email: req.body.email,
                                senha: hash
                            }).then(() => {
                                req.flash('success_msg', 'Usuario registrado com sucesso!')
                                res.redirect('/')
                            }).catch((err) => {
                                req.flash('error_msg', 'Houve um erro durante o salvamento do usuario')
                                res.redirect('/usuario/registro')
                            })
                        })
                    })
                }
            }).catch((err) => {
                req.flash("error_msg", 'Houve um erro interno')
                res.redirect('/')
            })
        }
})

router.get('/login', (req, res) => {
    res.render('usuarios/login')
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/usuarios/login',
        failureFlash: true
    })(req, res, next)
})

router.get('logout', (req, res) => {
    req.logout()
    res.flash('success_msg', 'Deslogado com sucesso!')
    res.redirect('/')
    /* coloca essa rota em alguma parte da navbar */
})

module.exports = router