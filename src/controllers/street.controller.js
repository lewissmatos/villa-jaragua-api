const Street = require("../models/street.model")

exports.createStreet = async (req, res) => {

    try {
        const street = new Street(req.body)

        await street.save()

        res.status(201).json({ok:true, data: street})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getAllStreet = async (req, res) => {

    try {
        const street = await Street.find()
        .populate('neighborhood')
        
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
        .populate('neighborhood')

        res.status(201).json({ok:true, data: street})

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

