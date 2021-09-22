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

router.get('/', (req, res) => {
    res.render('profissional/index')
})

router.get('/perfil/:id', (req, res) => {
    Usuario.findOne({where: {id: req.params.id}}).then((usuarios) => {
        Profissional.findAll().then((profissionais) => {
            res.render('profissional/editperfil', {usuarios: usuarios, profissionais: profissionais})
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao carregar o perfil')
            res.redirect('/usuario/profissoes')
        })
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro ao carregar a página de editar perfil')
        res.redirect('/usuario/profissoes')
    })
})

router.post('/perfil/edit', (req,res) => {
    Usuario.findOne({where: {id: req.body.id}}).then((usuarios) => {
        usuarios.nome = req.body.nome
        usuarios.cidade = req.body.cidade
        usuarios.telefone = req.body.telefone
        usuarios.funcao = req.body.profissao
        usuarios.descricao = req.body.descricao

        usuarios.save().then(() => {
            req.flash('success_msg', 'Edição do perfil concluída')
            res.redirect('/usuario/profissional/' + req.body.id)
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao salvar a edição do perfil')
            res.redirect('/usuarios/profissoes')
        })
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro ao salvar a edição')
        res.redirect('/usuario/profissoes')
    })
})

module.exports = router