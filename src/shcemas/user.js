const mongoose = require('mongoose')

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    
    login: {
        type: String,
        required: true,
        trim: true, 
    },

    password: {
        type: String,
        required: true,
        select: true,//não vai vim junto em uma lista
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },

})

userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

module.exports = mongoose.model('User', userSchema);