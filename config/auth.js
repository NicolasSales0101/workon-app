const localStrategy = require('passport-local').Strategy
const sequelize = require('sequelize')
const bcrypt = require('bcryptjs')

//Model de usuário
const Usuario = require('../models/Usuario')

module.exports = (passport) => {

    passport.use(new localStrategy({usernameField: 'email', passwordField: 'senha'}, (email, senha, done) => {
        Usuario.findOne({email: email}).then((usuario) => {

            if(!usuario){
                return done(null, false, {message: 'Esta conta não existe'})
            }

            bcrypt.compare(senha, usuario.senha, (erro, batem) => {

                if(batem){
                    return done(null, usuario)

                } else {
                    return done(null, false, {message: 'senha incorreta'})
                }
            })
        })

    }))

    passport.serializeUser((usuario, done) => {
        done(null, usuario._id)
    })

    passport.deserializeUser((id, done) => {
        Usuario.findById(id, (err, usuario) => {
            done(err, usuario)
        })
    })
}