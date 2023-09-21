const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var {Clinic_VaccineRecord, validate} = require("../../model/ClinicModel/VaccineRecord");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let clinic_VaccineRecord = new Clinic_VaccineRecord();
    clinic_VaccineRecord.vaccine_name = req.body.vaccine_name; 
    clinic_VaccineRecord.manufacture = req.body.manufacture; 
    clinic_VaccineRecord.vaccine_type = req.body.vaccine_type; 
    clinic_VaccineRecord.expiry_date = req.body.expiry_date; 
    clinic_VaccineRecord.quantity = req.body.quantity; 
    clinic_VaccineRecord.dosage_information = req.body.dosage_information; 
    clinic_VaccineRecord.adverse_reaction = req.body.adverse_reaction; 

    await clinic_VaccineRecord.save();
    return res.send(clinic_VaccineRecord);
});




router.put("/:id", async (req, res)=>{
    let clinic_VaccineRecord = await Clinic_VaccineRecord.findById(req.params.id);


    clinic_VaccineRecord.vaccine_name = req.body.vaccine_name; 
    clinic_VaccineRecord.manufacture = req.body.manufacture; 
    clinic_VaccineRecord.vaccine_type = req.body.vaccine_type; 
    clinic_VaccineRecord.expiry_date = req.body.expiry_date; 
    clinic_VaccineRecord.quantity = req.body.quantity; 
    clinic_VaccineRecord.dosage_information = req.body.dosage_information; 
    clinic_VaccineRecord.adverse_reaction = req.body.adverse_reaction; 

    await clinic_VaccineRecord.save();
    return res.send(clinic_VaccineRecord);
});



router.get("/",  async (req,res)=>{
    let row = await Clinic_VaccineRecord.find();
    return res.send(row);
});

router.delete("/:id",  async (req, res)=>{
    let clinic_VaccineRecord = await Clinic_VaccineRecord.findByIdAndDelete(req.params.id);
    return res.send(clinic_VaccineRecord);
});



module.exports = router;