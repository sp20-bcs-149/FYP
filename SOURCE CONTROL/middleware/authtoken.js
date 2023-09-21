const jwt = require('jsonwebtoken');
const config = require("config");

const {User} = require("../model/user");

async function auth(req,res,next){
    let token = req.header("x-auth-token");                        // here token variable and headers token name should be same (ERROR)


    if(!token) return res.status(400).send("Token not Provided");
    console.log(token);


    try{
        let user = jwt.verify(token, config.get("jwtPrivateKey"));
        req.user = await User.findById(user._id);
        // console.log(req.user);
    // req.user = user;
    }catch(err){
        return res.status(401).send("Invalid Token");
    }
    


    next();
}


module.exports = auth;