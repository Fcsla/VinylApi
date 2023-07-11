const mongoose = require('mongoose');

const VinylSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    artist: {
        type: String
    },
    condition: {
        type: String
    }

}, {timestamps: true});

module.exports = mongoose.model('Vinyl', VinylSchema);