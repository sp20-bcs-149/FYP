const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../../model/user');

// const auth = require('../../middleware/authtoken');
const config = require('config');

router.post("/login", async(req,res) => {
    let user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("user not register");
    let isValid = await bcrypt.compare(req.body.password , user.password);
    if(!isValid) return res.status(401).send("Invalid Password");
    let token = jwt.sign(
        {_id : user._id, name :user.name,role: user.role},   // what you want to public
        config.get("jwtPrivateKey")             // privateKey
    );
    
    res.send(token);
    // res.send("Logged in Successfully");

})


module.exports = router;