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
    },
    profile_img: {
        type: db.Sequelize.STRING,
        defaultValue: 'default_profile_image.png'
    }
})

Profissional.hasMany(Usuario, {as: 'Usuarios', foreignKey: 'funcao'})
Usuario.belongsTo(Profissional, {as: 'Profissionais', foreignKey: 'funcao'})
//Usuario.sync({force: true})

/* Tire o comentários deste bloco e executa para já ter usuários cadastrados para fins de teste ;)

Usuario.create({
    nome: "Nicolas Sales",
    email: "emailtest@gmail.com",
    senha: "123nicolas",
    funcao: 3,
    descricao: "Eu sou um dos criadores do Projeto!",
    cidade: "Nova Mamoré",
    telefone: "(69) 99999-0000"
})

Usuario.create({
    nome: "Paulo Henrique",
    email: "emailtest2@gmail.com",
    senha: "123paulo",
    funcao: 2,
    descricao: "Eu sou um dos criadores do Projeto!",
    cidade: "Nova Mamoré",
    telefone: "(69) 00000-9999"
})

Usuario.create({
    nome: "Usuario Teste 1",
    email: "emailtest3@gmail.com",
    senha: "123teste1",
    funcao: 1,
    descricao: "Eu sou o primeiro teste, o Usuario Teste 1!",
    cidade: "Guajará-Mirim",
    telefone: "(69) 10000-0000"
})

Usuario.create({
    nome: "Usuario Teste 2",
    email: "emailtest4@gmail.com",
    senha: "123teste2",
    funcao: 4,
    descricao: "Eu sou o segundo teste, o Usuario Teste 2!",
    cidade: "Guajará-Mirim",
    telefone: "(69) 20000-0000"
})

Usuario.create({
    nome: "Usuario Teste 3",
    email: "emailtest5@gmail.com",
    senha: "123teste3",
    funcao: 5,
    descricao: "Eu sou o terceiro teste, o Usuario Teste 3!",
    cidade: "Guajará-Mirim",
    telefone: "(69) 30000-0000"
})

Usuario.create({
    nome: "Usuario Teste 4",
    email: "emailtest6@gmail.com",
    senha: "123teste4",
    funcao: 6,
    descricao: "Eu sou o quarto teste, o Usuario Teste 4!",
    cidade: "Porto-Velho",
    telefone: "(69) 40000-0000"
})

Usuario.create({
    nome: "Usuario Teste 5",
    email: "emailtest7@gmail.com",
    senha: "123teste5",
    funcao: 7,
    descricao: "Eu sou o quinto teste, o Usuario Teste 5!",
    cidade: "Porto-Velho",
    telefone: "(69) 50000-0000"
})

*/

module.exports = Usuario
