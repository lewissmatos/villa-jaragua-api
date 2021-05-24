const Router = require('express')
const sectorCtrl = require('../controllers/sector.controller')

let router = Router()

router.post('/', sectorCtrl.createSector)

router.get('/', sectorCtrl.getAllSectors)

router.get('/:id', sectorCtrl.getSectorById)

router.get('/streets/:id', sectorCtrl.getStreetsBySectorId)

router.put('/:id', sectorCtrl.editSector)

router.delete('/:id', sectorCtrl.deleteSector)

module.exports = router