/* Arquivo para criacao da tabela e campos do Usuario*/

const db = require('./db')

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    funcao: {
        type: db.Sequelize.INTEGER,
    }
})

//Usuario.sync({force: true})

module.exports = Usuario
