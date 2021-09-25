/* Model para criação da tabela que armazenará as mensagens do bate-papo/chat */
const db = require('./db')

const Chat = db.sequelize.define('chat', {
    sender: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    receiver: {
        type: db.Sequelize.STRING,
        allowNull: false 
    },
    mensagem: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    id_sender: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    id_receiver: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Chat