const Router = require('express')
const streetCtrl = require('../controllers/street.controller')

let router = Router()

router.post('/', streetCtrl.createStreet)

router.get('/', streetCtrl.getAllStreet)

router.get('/:id', streetCtrl.getStreetById)

router.get('/sectors/:name', streetCtrl.getSectorsByStreetId)

router.put('/:id', streetCtrl.editSector)

router.delete('/:id', streetCtrl.deleteStreet)

module.exports  = router