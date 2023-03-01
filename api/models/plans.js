const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    planName: String,
    planDescription: String,
    features: Array,
    priceUSD: Number,
});

module.exports = mongoose.model('Plans', userSchema);