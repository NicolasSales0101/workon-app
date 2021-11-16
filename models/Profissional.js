/* model para criação da tabela profissionais */

const db = require('./db')

const Profissional = db.sequelize.define('profissionais', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    profissao: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

//Profissional.sync({force: true})

/* Recomenda-se comentar esse bloco depois de executar o projeto pela primeira vez */

Profissional.create({
    id: 1,
    profissao: 'Pedreiro'
})

Profissional.create({
    id: 2,
    profissao: 'Pintor'
})

Profissional.create({
    id: 3,
    profissao: 'Engenheiro'
})

Profissional.create({
    id: 4,
    profissao: 'Mestre de obras'
})

Profissional.create({
    id: 5,
    profissao: 'Armador'
})

Profissional.create({
    id: 6,
    profissao: 'Carpinteiro'
})

Profissional.create({
    id: 7,
    profissao: 'Eletricista'
})

Profissional.create({   
    id: 8,
    profissao: 'Encanador'
})

Profissional.create({
    id: 9,
    profissao: 'Ajudante de pedreiro'
})

/* Comenta até aqui! */

module.exports = Profissional   
