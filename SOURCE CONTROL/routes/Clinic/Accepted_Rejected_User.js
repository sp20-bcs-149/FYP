const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var {Clinic_Accepted_Rejected_User, validate} = require("../../model/ClinicModel/Accepted_Cancel_User");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let clinic_Accepted_Rejected_User = new Clinic_Accepted_Rejected_User();
    clinic_Accepted_Rejected_User.Username = req.body.Username; 
    clinic_Accepted_Rejected_User.user_ID = req.body.user_ID; 
    clinic_Accepted_Rejected_User.date = req.body.date; 
    clinic_Accepted_Rejected_User.start_time = req.body.start_time; 
    clinic_Accepted_Rejected_User.End_time = req.body.End_time; 
    clinic_Accepted_Rejected_User.vaccine_name = req.body.vaccine_name; 
    clinic_Accepted_Rejected_User.clinic_status = req.body.clinic_status; 

    await clinic_Accepted_Rejected_User.save();
    return res.send(clinic_Accepted_Rejected_User);
});

router.put("/:id", async (req, res)=>{
    let clinic_Accepted_Rejected_User = await Clinic_Accepted_Rejected_User.findById(req.params.id);

    clinic_Accepted_Rejected_User.Username = req.body.Username; 
    clinic_Accepted_Rejected_User.user_ID = req.body.user_ID; 
    clinic_Accepted_Rejected_User.date = req.body.date; 
    clinic_Accepted_Rejected_User.start_time = req.body.start_time; 
    clinic_Accepted_Rejected_User.End_time = req.body.End_time; 
    clinic_Accepted_Rejected_User.vaccine_name = req.body.vaccine_name; 
    clinic_Accepted_Rejected_User.clinic_status = req.body.clinic_status; 

    await clinic_Accepted_Rejected_User.save();
    return res.send(clinic_Accepted_Rejected_User);
});


router.get("/",  async (req,res)=>{
    const user_ID = req.query.user_ID;
    try {
        const user = await Clinic_Accepted_Rejected_User.find({ user_ID: user_ID });

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


router.delete("/:id",  async (req, res)=>{
    let clinic_Accepted_Rejected_User = await Clinic_Accepted_Rejected_User.findByIdAndDelete(req.params.id);
    return res.send(clinic_Accepted_Rejected_User);
});



module.exports = router;