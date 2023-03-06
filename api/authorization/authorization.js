const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

let jwtSecretKey = process.env.JWT_SECRET_KEY;
const User = require('../models/users');
const Store = require('../models/stores');


class userObject {
    constructor(username) {
      this.username = username;
    }

    createAccessToken(){

        let data = {
            time: Date(),
            username: this.username,
        }
        const token = jwt.sign(data, jwtSecretKey);
          
    return token;
    }

    checkUsername(){
        return false;
    }
  }




async function getUserId(accessToken){
    try{
        const foundUser = await User.findOne({authToken: accessToken});
        return foundUser.userId
    }catch{
        return null

    }

}

async function hasPermission(userId, shopId){
    const foundShop = await Store.findOne({storeId: shopId});
    if(foundShop){
        if(foundShop.assignedUserId == userId){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }

}

async function getStoreInfo(shopId){
    try{
        const foundShop = await Store.findOne({storeId: shopId});
        return foundShop
    }catch{
        return "error"
    }
}


  module.exports = {userObject, getUserId, hasPermission, getStoreInfo};
  




