const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    description: String,
    assignedUserId: String
});

module.exports = mongoose.model('Shop', shopSchema);