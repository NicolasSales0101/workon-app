const Sequelize = require('sequelize')

// Conexão com Banco de Dados MySQL

const sequelize = new Sequelize('workon_app', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
	console.log('Conectado com sucesso!')
}).catch((erro) => {
	console.log('Falha ao se conectar: ' + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}