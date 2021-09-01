const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('profissional/index')
})

module.exports = router