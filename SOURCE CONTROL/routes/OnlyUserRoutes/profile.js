const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var { Profile, validate, Profile } = require("../../model/UserProfile");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let profile = new Profile();
    profile.my_ID = req.body.my_ID;
    profile.my_ROLE = req.body.my_ROLE; 
    profile.name = req.body.name;
    profile.gender = req.body.gender;
    profile.age = req.body.age;
    profile.cnic = req.body.cnic;
    profile.country = req.body.country;
    profile.phoneno = req.body.phoneno;
    profile.medical = req.body.medical;
    profile.allergies = req.body.allergies;

    await profile.save();
    return res.send(profile);
});

// all record from db in api format
router.get("/",  async (req,res)=>{
    const my_ID = req.query.my_ID;
    try {
        const user = await Profile.findOne({ my_ID: my_ID });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // const parsedData = JSON.parse(user.jsonData); // Parse JSON string

        // res.json(parsedData);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }

});



// update record 
router.put("/:id", async (req, res)=>{
    let profile = await Profile.findById(req.params.id);

    profile.my_ID = req.body.my_ID;
    profile.my_ROLE = req.body.my_ROLE; 
    profile.name = req.body.name;
    profile.gender = req.body.gender;
    profile.age = req.body.age;
    profile.cnic = req.body.cnic;
    profile.country = req.body.country;
    profile.phoneno = req.body.phoneno;
    profile.medical = req.body.medical;
    profile.allergies = req.body.allergies;

    await profile.save();
    return res.send(profile);
});


router.delete("/:id",  async (req, res)=>{
    let profile = await Profile.findByIdAndDelete(req.params.id);
    return res.send(profile);
});



module.exports = router;