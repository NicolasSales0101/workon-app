/* Model para criação da tabela que armazenará as mensagens */

const db = require('./db')
const Chat = require('./Chat')

const Mensagem = db.sequelize.define('mensagens', {
    mensagem: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    sender_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    sender_nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    chat_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }

})

Chat.hasMany(Mensagem, {as: 'Mensagens', foreignKey: 'chat_id'})
Mensagem.belongsTo(Chat, {as: 'Chats', foreignKey: 'chat_id'})

// Mensagem.sync({force: true})

module.exports = Mensagem