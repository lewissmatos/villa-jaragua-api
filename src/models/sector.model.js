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
            type: Schema.Types.ObjectId,
            ref: 'Sector',
            trim:true
        },
        toTheSouth:{
            type: Schema.Types.ObjectId,
            ref: 'Sector',           
            trim:true
        },
        toTheEast:{
            type: Schema.Types.ObjectId,
            ref: 'Sector',           
            trim:true
        },
        toTheWest:{
            type: Schema.Types.ObjectId,
            ref: 'Sector',            
            trim:true
        },
        poblation:{
            type: Number,
            trim: true,
            required: true
        }
    }
}, {versionKey:false})

module.exports = model('Sector', SectorSchema)