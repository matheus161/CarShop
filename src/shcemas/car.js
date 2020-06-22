const mongoose = require('mongoose')

//User Car Schema

const carSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        trim: true,
    },
    
    marca: {
        type: String,
        required: true,
        trim: true, 
    },

    modelo: {
        type: String,
        required: true,
        trim: true,
    },

    ano: {
        type: String,
        required: true,
        trim: true,
    },

    placa: {
        type: String,
        required: true,
        trim: true,
    },

    cor: {
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model('Car', carSchema);