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
    const accessToken = req.headers['authorization'];
    console.log(req.headers);
    if(accessToken){
        const userId = await Authorization.getUserId(accessToken)
        const status = await Authorization.hasPermission(userId, storeId);
        if(status){
        const storeInfo = await Authorization.getStoreInfo(storeId);
            resp.json({
                storeInfo
        })  
        }else{
            resp.json({
                error: "Forbidden 403"
            })  
        }
    }else{
        resp.json({
                error: "missing authentication"
            })  
    }
    
    

    
    
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


