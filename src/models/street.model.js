const { Schema, model } = require("mongoose");

const StreetSchema = Schema({
    name:{
        type: String,
        require: true,
        trim: true,
    },
    sectors:[{
        type: Schema.Types.ObjectId,
        ref: 'Sector', 
        required: true,
        trim: true
    }]
},{versionKey: false})

module.exports = model('Street', StreetSchema)