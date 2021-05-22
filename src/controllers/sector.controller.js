const Sector = require("../models/sector.model")

exports.createSector = async (req, res)=>{
    
    try {
        
        const sector = new Sector(req.body)

        await sector.save()

        res.status(201).json({ok:true, data:sector})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getAllSectors = async(req, res)=>{
    
    try {
        
        const sector = await Sector.find()
        
        res.status(200).json({ok:true, data:sector})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getSectorById = async(req, res)=>{
    
    const {id} = req.params
    try {
        
        const sector = await Sector.findById(id)
        
        res.status(200).json({ok:true, data:sector})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.deleteSector = async(req, res)=>{
    
    const {id} = req.params
    try {
        
        const sector = await Sector.findByIdAndDelete(id)
        
        res.status(200).json({ok:true, data:sector})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}