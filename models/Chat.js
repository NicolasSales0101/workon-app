/* Model para criação da tabela que armazenará as mensagens do bate-papo/chat */
const db = require('./db')

const Chat = db.sequelize.define('chat', {
    sender_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    sender_nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    sender_img: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    receiver_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    receiver_nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    receiver_img: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

// Chat.sync({force: true})

module.exports = Chat