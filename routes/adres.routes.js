const Router = require('express')
const router= new Router()
const adresControllers = require('../controllers/adres.controllers')

router.post('/adres', adresControllers.createAdres)
router.get('/adres', adresControllers.getAdres)
router.get('/adres/:id',adresControllers.getOneAdres)
router.put('/adres', adresControllers.updateAdres)
router.delete('/adres/:id', adresControllers.deleteAdres)


module.exports = router