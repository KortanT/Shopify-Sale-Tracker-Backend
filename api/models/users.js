const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    userId: String,
    name: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    countryCode: Number,
    phoneNumber: Number,
    firstLoginIP: String,
    lastLoginIP: String,
    authToken: String,
    planId: String,
    expireDate: String
});

module.exports = mongoose.model('Users', userSchema);