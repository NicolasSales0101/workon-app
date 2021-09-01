/*  */
module.exports = {
    eAdmin: (req, res, next) => {
        if(req.isAuthenticated() && req.user.eAdmin == 1){
            return next()
        }

        req.flash('error_msg', 'Você deve estar logado para entrar aqui, você precisa ser um Admin')
        res.redirect('/')
    }
}

/* const {eAdmin} = require('../helpers/eAdmin) 
   router.get([...], eAdmin, [...]) --> ou seja,coloca-se eAdmin na rota nos quais 
                                        precisem satisfazer os paramêtros acima
*/