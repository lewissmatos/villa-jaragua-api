const Router = require('express')

const sectorCtrl = require('../controllers/sector.controller')

let router = Router()

router.post('/', sectorCtrl.createSector)

router.get('/', sectorCtrl.getAllSectors)

router.get('/:id', sectorCtrl.getSectorById)

module.exports = router