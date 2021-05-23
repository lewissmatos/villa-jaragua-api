const Router = requires ('express')
const neighborhoodCtrl = require('../controllers/neighborhood.controller')

let router = Router()

router.post('/', neighborhoodCtrl.createNeighborhood)

router.get('/', neighborhoodCtrl.getAllNeighborhoods)

router.get('/:id', neighborhoodCtrl.getNeighborhoodById)

router.delete('/:id', neighborhoodCtrl.deleteNeighborhood)

module.exports = router