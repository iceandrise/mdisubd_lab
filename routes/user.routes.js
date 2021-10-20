const Router = require('express')
const router= new Router()
const userControllers = require('../controllers/user.controllers')

router.post('/user', userControllers.createUser)
router.get('/user', userControllers.getUsers)
router.get('/user/:id',userControllers.getOneUser)
router.put('/user', userControllers.updateUser)
router.delete('/user/:id', userControllers.deleteUser)


module.exports = router