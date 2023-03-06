const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    storeUrl: String,
    description: String,
    assignedUserId: String,
    storeId: String
});

module.exports = mongoose.model('Shop', shopSchema);