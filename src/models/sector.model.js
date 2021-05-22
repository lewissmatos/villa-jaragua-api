const { Schema, model } = require("mongoose");

const SectorSchema = Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    neighborhoods:[
        {
            type:String,
            photo: String,
            required:true,
            trim: true,
        }
    ],
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
    surroundedBY:{
        
        toTheNorth:{
            type: String,
            trim:true
        },
        toTheSouth:{
            type: String,
            trim:true
        },
        toTheEast:{
            type: String,
            trim:true
        },
        toTheWest:{
            type: String,
            trim:true
        },
    }
}, {versionKey:false})

module.exports = model('Sector', SectorSchema)