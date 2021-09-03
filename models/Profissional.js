/* model para criação da tabela profissionais */

const db = require('./db')

const Profissional = db.sequelize.define('profissionais', {
    profissao: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Profissional

//Profissional.sync({force: true})
