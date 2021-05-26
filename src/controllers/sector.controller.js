const Sector = require("../models/sector.model")
const Streets = require("../models/street.model")

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
    
    const { sort } = req.query
    
    try {
        
        const sector = await Sector.find().sort({
            area: sort
        })
        
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
        .populate('surroundedBY')
        
        
        res.status(200).json({ok:true, data:sector})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.editSector = async(req, res)=>{
    
    const {id} = req.params

    const {_id, ...rest } = req.body

    try {
        
        const sector = await Sector.findByIdAndUpdate(id, rest, {new:true})
        
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

exports.getStreetsBySectorId = async (req,res) =>{
    
    const {id} = req.params

    try {
                
        const streets = await Streets.find({sectors: id})        
        .select('-sectors')

        res.status(200).json({ok:true, data:streets})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}