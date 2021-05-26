const sectorModel = require("../models/sector.model")
const Sector = require("../models/street.model")

const Street = require('../models/street.model')
exports.createStreet = async (req, res) => {

    try {
        const street = new Street(req.body)

        await street.save()

        return res.status(201).json({ok:true, data: street})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getAllStreet = async (req, res) => {


    try {
        const street = await Street.find().sort({
            name: 'asc'
        })
        
        res.status(201).json({ok:true, data: street})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getStreetById = async (req, res) => {
    
    const {id} = req.params
    try {
        
        const street = await Street.findById(id)

        res.status(201).json({ok:true, data: street})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}


exports.editSector = async (req, res) => {

    const {id} = req.params

    const {name, sectors} = req.body

    try {

        const street = await Street.findByIdAndUpdate(id, {name, sectors}, {new: true})

        res.status(200).json({ok:true, data: street})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.deleteStreet = async (req, res) => {

    const {id} = req.params

    try {

        const street = await Street.findByIdAndDelete(id)

        res.status(201).json({ok:true, data: street})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getSectorsByStreetId = async (req, res) => {

    const {name} = req.params

    try {
        const street = await Street.findOne({name})
        .populate('sectors')

        return res.status(200).json({ok:true, data: street})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

