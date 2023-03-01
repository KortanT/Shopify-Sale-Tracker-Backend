const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

let jwtSecretKey = process.env.JWT_SECRET_KEY;
const User = require('../models/users');


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


//FIXME
async function getUserId(accessToken){
    await User.findOne({authToken: accessToken})
    .then((foundUser) => {
        if(foundUser){
        const userId = foundUser.userId;
        return userId;
        }else{
            return "not found";
        }
   })

}


  


  module.exports = {userObject, getUserId, run};
  




