const express = require('express');
const router = express.Router();
const morgan = require('morgan')
const Authorization = require('../authorization/authorization');

const Shop = require('../models/stores');
const User = require('../models/users');

{/* Get Store Info */}
//FIXME
router.get('/:storeId', async (req, resp, next) => {
    const storeId = req.params.storeId;
    const accessToken = req.headers['access-token'];
    const userId = await Authorization.run(accessToken);
    console.log(userId)

    
    resp.status(200).json({
        message: "get success"
    })
})

{/* Delete Store */}
router.delete(':/storeId', (req, resp, next) => {
    const storeId = req.params.storeId;
    resp.status(200).json({
        message: "deleted"
    })
})

{/* Add a new Store */}
router.post('/add', (req, resp, next) => {
    const shopInfo = {
        shopId: req.body.shopId
    }
    const authorization = req.headers['authorization'];


    resp.status(200).json({
        message: "post success",
        authorization: authorization,
        shopInfo: shopInfo
    })
})

module.exports = router;


