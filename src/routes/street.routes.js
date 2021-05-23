const Router = require('express')
const streetCtrl = require('../controllers/street.controller')

let router = Router()

router.post('/', streetCtrl.createStreet)

router.get('/', streetCtrl.getAllStreet)

router.get('/:id', streetCtrl.getStreetById)

router.delete('/:id', streetCtrl.deleteStreet)

module.exports  = router