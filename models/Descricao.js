// Model para criação da tabela descricao do profissional cadastrado no site

const db = require('./db')

const Descricao = db.sequelize.define('descricoes', {
    descricao: {
        type: db.Sequelize.TEXT
    },
    localizacao: {
        type: db.Sequelize.STRING
    },
    idProfissional: {
        type: db.Sequelize.INTEGER
    }
})

//Descricao.sync({force: true})