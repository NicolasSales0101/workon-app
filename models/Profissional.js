/* model para criação da tabela profissionais */

const db = require('./db')

const Profissional = db.sequelize.define('profissionais', {
    profissao: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

//Profissional.sync({force: true})

