const db = require('./db')
const Usuario = require('./Usuario')

const Imagem = db.sequelize.define('imagens', {
    name: { 
        type: db.Sequelize.STRING, 
        allowNull: false
    },
    size: { 
        type: db.Sequelize.INTEGER, 
        allowNull: false
    },
    url: {
        type: db.Sequelize.STRING,
    },
    key: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }

})

/**
 * const fs = require('fs')
 * const path = require('path')
 * const { promisify } = require('util')
 * return promisify(fs.unlink)(
 *  path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key))
 */

 Usuario.hasOne(Imagem, {as: 'Imagens', foreignKey: 'user_id'})
 Imagem.belongsTo(Usuario, {as: 'Usuarios', foreignKey: 'user_id'})
 //Imagem.sync({force: true})

module.exports = Imagem