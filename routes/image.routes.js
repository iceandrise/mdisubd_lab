const Router = require('express')
const router= new Router
const imageControllers = require('../controllers/image.controllers')

router.post('/image', imageControllers.createImage)
router.get('/image', imageControllers.getImage)
router.delete('/image/:id', imageControllers.deleteImage)


module.exports = router