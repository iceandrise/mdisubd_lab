const Router = require('express')
const router= new Router()
const itemControllers = require('../controllers/item.controllers')

router.post('/item', itemControllers.createItem)
router.get('/item', itemControllers.getItem)
router.get('/item/:id',itemControllers.getOneItem)
router.put('/item', itemControllers.updateItem)
router.delete('/item/:id', itemControllers.deleteItem)


module.exports = router