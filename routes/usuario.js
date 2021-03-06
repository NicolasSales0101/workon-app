const express = require('express')
const router = express.Router()
const sequelize = require('sequelize')
const Usuario = require ('../models/Usuario')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { where } = require('sequelize')
const Profissional = require('../models/Profissional')
const db = require('../models/db')
const bodyParser = require('body-parser')
const { Op } = require("sequelize");
const { userInfo } = require('os')

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

        if(erros.length > 0){
            res.render('usuarios/registro', {erros: erros})
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
                                senha: hash,
                            }).then(() => {
                                req.flash('success_msg', 'Usuario registrado com sucesso!')
                                res.redirect('/usuario/saudacoes')
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

router.get('/saudacoes', (req, res) => {
    res.render('usuarios/saudacoes')
})

router.get('/sobre', (req, res) => {
    res.render('usuarios/sobre')
})

/* Rota para o usuário (que até então é um usuário normal) se cadastrar como um profissional 
    
   - Find para fazer a relação com funcao

Erro: acontece algo em relação ao código abaixo

*/
router.get('/cadastro-profissao/:id', (req, res) => {
    Usuario.findOne({where: {id: req.params.id}}).then((usuarios) => {
        Profissional.findAll().then((profissionais) => {
            console.log(usuarios.id)
            res.render('usuarios/cadastro-profissao', {usuarios: usuarios, profissionais: profissionais})//.map(profissionais => profissionais.toJSON())})
        }).catch((err) => {
            console.log(err)
            req.flash('error_msg', 'Erro ao carregar o formulário!')
            res.redirect('/')
        })
    }).catch((err) => {
        req.flash('error_msg', 'Erro ao carrregar o formulário')
        res.redirect('/')
    })
    
})

router.post('/cadastro-profissao/add', (req, res) => {
    Usuario.findOne({where: {id: req.body.id}}).then((usuarios) => { 
        //usuarios.funcao = req.body.profissa
        console.log(usuarios.id)
        usuarios.update({funcao: req.body.profissao}, {where: {funcao: null}}).then(() => {
            req.flash('success_msg', 'Cadastro feito com sucesso! Agora você é um profissional cadastrado no site!')
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
            req.flash('error_msg', 'Erro interno')
            res.redirect('/')
        })
    }).catch((err) => {
        console.log(err)
        req.flash('error_msg', 'Houve um erro ao salvar o seu cadastro de profissão')
        res.redirect('/')
    })
})

router.get('/login', (req, res) => {
    res.render('usuarios/login')
})

router.post('/login', passport.authenticate('local', {
        successRedirect: '/usuario/profissoes',
        failureRedirect: '/usuario/login',
        failureFlash: true
    }), (req, res) => {
        req.flash('error_msg', 'Houve um erro ao efetuar o processo de login')
        res.redirect('/')
    })

router.get('/profissoes', (req, res) => {
    Usuario.findAll({where: {funcao: {[Op.ne]: null}, id: {[Op.ne]: req.user.id}}, include: [{model: Profissional, as: 'Profissionais'}]}).then((usuarios) => {
        Profissional.findAll().then((profissionais) => {
            Usuario.count({where: {funcao: {[Op.ne]: null}, id: {[Op.ne]: req.user.id}}}).then((resposta) => {
                res.render("usuarios/profissoes", {usuarios: usuarios.map(usuarios => usuarios.toJSON()), profissionais: profissionais, total: resposta})
            })
        }).catch((err) => {
            console.log(err)
            req.flash('error_msg', 'Houve um erro ao listar os profissionais ❌')
            res.redirect('/')
        })
        }).catch((err) => {
            console.log(err)
            req.flash('error_msg', 'Houve um erro ao listar os profissionais')
            res.redirect('/')
        })
}) 

router.post('/profissoes/filtro', (req, res) => {
    console.log(req.body.filtro)
    if (req.body.filtro != 0) {
        Usuario.findAll({where: {funcao: {[Op.eq]: req.body.filtro}, id: {[Op.ne]: req.user.id}}, include: [{model: Profissional, as: 'Profissionais'}]}).then((usuarios) => {
            Profissional.findAll().then((profissionais) => {
                Usuario.count({where: {funcao: {[Op.eq]: req.body.filtro}, id: {[Op.ne]: req.user.id}}}).then((resposta) => {
                    res.render("usuarios/profissoes", {usuarios: usuarios.map(usuarios => usuarios.toJSON()), profissionais: profissionais, total: resposta})
                })
            }).catch((err) => {
                req.flash('error_msg', 'Houve um erro ao listar os profissionais ❌')
            })
        }).catch((err) => {
            console.log(err)
            req.flash('error_msg', 'Houve um erro ao listar os profissionais')
            res.redirect('/')
        })  
    } else {
        Usuario.findAll({where: {funcao: {[Op.ne]: null}, id: {[Op.ne]: req.user.id}}, include: [{model: Profissional, as: 'Profissionais'}]}).then((usuarios) => {
            Profissional.findAll().then((profissionais) => {
                Usuario.count({where: {funcao: {[Op.ne]: null}, id: {[Op.ne]: req.user.id}}}).then((resposta) => {
                    res.render("usuarios/profissoes", {usuarios: usuarios.map(usuarios => usuarios.toJSON()), profissionais: profissionais, total: resposta})
                })
            }).catch((err) => {
                req.flash('error_msg', 'Houve um erro ao listar os profissionais ❌')
            })
            }).catch((err) => {
                console.log(err)
                req.flash('error_msg', 'Houve um erro ao listar os profissionais')
                res.redirect('/')
            })
    }
     
})

router.get('/profissoes/:id', (req, res) => {
    Usuario.findAll({where: {funcao: {[Op.eq]: req.params.id}, id: {[Op.ne]: req.user.id}}, include: [{model: Profissional, as: 'Profissionais'}]}).then((usuarios) => {
        Profissional.findAll().then((profissionais) => {
            Usuario.count({where: {funcao: {[Op.eq]: req.params.id}, id: {[Op.ne]: req.user.id}}}).then((resposta) => {
                res.render("usuarios/profissoes", {usuarios: usuarios.map(usuarios => usuarios.toJSON()), profissionais: profissionais, total: resposta})
            })
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao listar os profissionais ❌')
        })
    }).catch((err) => {
        console.log(err)
        req.flash('error_msg', 'Houve um erro ao listar os profissionais')
        res.redirect('/')
    })
})

router.get('/profissional/:id', (req, res) => {
    Usuario.findOne({where: {id: req.params.id}, include: [{model: Profissional, as: 'Profissionais'}]}).then((usuarios) => {
        var validacao = false
        
        if(req.user.id == usuarios.id){
            validacao = true
        }
        if(usuarios){
            res.render('profissional/perfil', {usuarios: usuarios, user: req.user, validacao: validacao})
        } else {
            req.flash('error_msg', 'Este profissional não existe!')
            res.redirect('/usuario/profissoes')
        }
    }).catch((err) => {
        console.log(err)
        req.flash('error_msg', 'Houve um erro interno, tente novamente mais tarde...')
        res.redirect('/usuario/profissoes')
    })
})

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'Deslogado com sucesso!')
    res.redirect('/')
})

module.exports = router