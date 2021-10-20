const Router = require('express')
const router= new Router()
const cartControllers = require('../controllers/cart.controllers')

router.post('/cart', cartControllers.createCart)
//router.get('/cart', cartControllers.getCart)
//router.get('/cart:id',cartControllers.getOneCart)
router.put('/cart', cartControllers.updateCart)
router.delete('/cart/:id', cartControllers.deleteCart)


module.exports = router