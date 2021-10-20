const Router = require('express')
const router= new Router()
const financeControllers = require('../controllers/finance.controllers')

router.post('/finance', financeControllers.createFinance)
/*router.get('/finance', financeControllers.getFinance)
router.get('/finance:id',financeControllers.getOneFinance)
router.put('/finance', financeControllers.updateFinance)
router.delete('/finance:id', financeControllers.deleteFinance)*/


module.exports = router