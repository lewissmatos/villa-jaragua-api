const { Schema, model } = require("mongoose");

const StreetSchema = Schema({
    name:{
        type: String,
        require: true,
        trim: true,
    },
    neighborhood:{
        type: Schema.Types.ObjectId,
        ref: 'Neighborhood',
        required: true,
        trim:true
    },
})

module.exports = model('Street', StreetSchema)