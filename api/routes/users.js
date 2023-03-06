const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const uuid = require('uuid4');

const User = require('../models/users');
const Authorization = require('../authorization/authorization');

router.get('/', (req, resp, next) => {
    resp.status(200).json({
        message: "get success"
    })
})

router.get('/update', (req, resp, next) => {
    resp.status(200).json({
        status: "success"
    })
})

{/* Add a new Store */}
router.post('/add', (req, resp, next) => {
        const newUser = new Authorization.userObject(req.body.username)
        const userInfo = new User({
        _id: new mongoose.Types.ObjectId(),
        userId: uuid(),
        name: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        countryCode: req.body.countryCode,
        phoneNumber: req.body.phoneNumber,
        firstLoginIP: req.socket.remoteAddress,
        lastLoginIP: req.socket.remoteAddress,
        authToken: newUser.createAccessToken(req.body.username),
        planId: "a0b6ba3e-609c-4db5-a927-45919e44e8cd",
        expireDate: (Date.now()/1000),
    });
    userInfo.save().then(result => console.log(result))
    const authorization = req.headers['authorization'];


    resp.status(200).json({
        message: "registered successfully",
        authorization: authorization,
        userInfo: userInfo
    })
})
module.exports = router;