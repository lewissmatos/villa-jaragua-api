const { Schema, model } = require("mongoose");

const SectorSchema = Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        unique: true
    },
    photo:{
        type: String  ,
        default: ''      
    },
    area:{
        type:Number,
        default: 0
    },
    coordinates:{   

        longitude: {
            type: Number,
            required: true,
            trim: true
        },

        latitude:{
            type: Number,
            required: true,
            trim: true
        }
    },
}, {versionKey:false})

module.exports = model('Sector', SectorSchema)