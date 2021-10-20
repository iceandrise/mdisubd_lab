const Router = require('express')
const router= new Router()
const promocodeControllers = require('../controllers/promocode.controllers')

router.post('/promocode', promocodeControllers.createPromocode)
router.get('/promocode', promocodeControllers.getPromocode)
//router.get('/promocode:id',promocodeControllers.getOnePromocode)
//router.put('/promocode', promocodeControllers.updatePromocode)
//router.delete('/promocode:id', promocodeControllers.deletePromocode)


module.exports = router