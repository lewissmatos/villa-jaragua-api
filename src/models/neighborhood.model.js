const { Schema, model } = require("mongoose");

const NeighborhoodSchema = Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    sector:{
        type: Schema.Types.ObjectId,
        ref: 'Sector',
        required: true, 
        trim: true
    },
    streets:[
        {
            name:{
                type: Schema.Types.ObjectId,
                ref:'Street',
                required: true,
                trim: true
            }
        }
    ]
})

module.exports = model('Neighborhood', NeighborhoodSchema)