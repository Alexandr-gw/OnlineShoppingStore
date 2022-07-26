const Router = require ('express')
const router =  new Router()
const TypeController = require('../controllers/TypeController.js')
const checkRole = require ('../middleware/checkRoleMiddleware.js')

router.post('/',checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router
