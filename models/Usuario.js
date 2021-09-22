/* Arquivo para criacao da tabela e campos do Usuario*/

const db = require('./db')
const Profissional = require('./Profissional')

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
        type: db.Sequelize.INTEGER
    },
    descricao: {
        type: db.Sequelize.TEXT
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    }
})

Profissional.hasMany(Usuario, {as: 'Usuarios', foreignKey: 'funcao'})
Usuario.belongsTo(Profissional, {as: 'Profissionais', foreignKey: 'funcao'})
//Usuario.sync({force: true})

module.exports = Usuario
