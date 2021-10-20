const Router = require('express')
const router= new Router()
const orderControllers = require('../controllers/order.controllers')

router.post('/order', orderControllers.createOrder)
router.get('/order', orderControllers.getOrders)
router.get('/order/:id',orderControllers.getOneOrder)
//router.put('/order', orderControllers.updateOrder)
router.delete('/order/:id', orderControllers.deleteOrder)


module.exports = router