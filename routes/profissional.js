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
const multer = require('multer')
const multerConfig = require('../config/multer')
const Imagem = require('../models/Imagem')

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

router.post('/perfil/edit', multer(multerConfig).single('file'), (req,res) => {
    Usuario.findOne({where: {id: req.body.id}}).then((usuarios) => {
        usuarios.nome = req.body.nome
        usuarios.cidade = req.body.cidade
        usuarios.telefone = req.body.telefone
        usuarios.funcao = req.body.profissao
        usuarios.descricao = req.body.descricao
        if (req.file) {
            usuarios.profile_img = req.file.filename
        }

        usuarios.save().then(() => {
            /*
                if(req.file) {
                    Imagem.create({
                        name: req.file.originalname,
                        size: req.file.size,
                        key: req.file.filename,
                        url: ''
                    }).then(() => {
                        req.flash('success_msg', 'Edição do perfil concluída')
                        res.redirect('/usuario/profissional/' + req.body.id)
                    }).catch((err) => {
                        req.flash('error_msg', 'Houve um erro durante o salvamento do usuario')
                        res.redirect('/profissional/perfil/' + req.body.id)
                    })
                }
            */
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