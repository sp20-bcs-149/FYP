const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../../model/user');

const config = require('config');

router.get("/registerdata", async(req,res) => {
    
    res.send(req.body);

})


module.exports = router;