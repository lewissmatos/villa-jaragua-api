const Neighborhood = require("../models/neighborhood.model")

exports.createNeighborhood = async (req, res) => {

    try {
        const neighborhood = new Neighborhood(req.body)

        await neighborhood.save()

        res.status(201).json({ok:true, data: neighborhood})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getAllNeighborhoods = async (req, res) => {

    try {
        const neighborhoods = await Neighborhood.find()
        .populate('street')
        .populate('sector')

        res.status(201).json({ok:true, data: neighborhoods})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getNeighborhoodById = async (req, res) => {

    const {id} = req.params
    try {

        const neighborhood = await Neighborhood.findById(id)
        .populate('street')
        .populate('sector')
        
        res.status(201).json({ok:true, data: neighborhood})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}


exports.deleteNeighborhood = async (req, res) => {

    const {id} = req.params

    try {

        const neighborhood = await Neighborhood.findByIdAndDelete(id)

        res.status(201).json({ok:true, data: neighborhood})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

