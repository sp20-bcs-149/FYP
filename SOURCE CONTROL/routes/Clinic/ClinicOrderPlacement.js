const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var {ClinicOrderPlacement, validate} = require("../../model/ClinicModel/ClinicOrderPlacement");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let clinicOrderPlacement = new ClinicOrderPlacement();
    clinicOrderPlacement.clinic_ID = req.body.clinic_ID; 
    clinicOrderPlacement.vaccine_name = req.body.vaccine_name; 
    clinicOrderPlacement.price = req.body.price; 
    clinicOrderPlacement.clinic_name = req.body.clinic_name; 
    clinicOrderPlacement.address = req.body.address; 
    clinicOrderPlacement.order_status = req.body.order_status; 
    clinicOrderPlacement.longitude = req.body.longitude; 
    clinicOrderPlacement.latitude = req.body.latitude; 

    await clinicOrderPlacement.save();
    return res.send(clinicOrderPlacement);
});


router.get("/",  async (req,res)=>{
    let row = await ClinicOrderPlacement.find();
    return res.send(row);
});





module.exports = router;