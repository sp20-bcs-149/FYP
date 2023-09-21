const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var {ClinicAppointment, validate} = require("../../model/ClinicModel/Appointment");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let clinicAppointment = new ClinicAppointment();
    clinicAppointment.Username = req.body.Username; 
    clinicAppointment.user_ID = req.body.user_ID; 
    clinicAppointment.date = req.body.date; 
    clinicAppointment.start_time = req.body.start_time; 
    clinicAppointment.End_time = req.body.End_time; 
    clinicAppointment.vaccine_name = req.body.vaccine_name; 

    await clinicAppointment.save();
    return res.send(clinicAppointment);
});




router.put("/:id", async (req, res)=>{
    let clinicAppointment = await ClinicAppointment.findById(req.params.id);

    clinicAppointment.Username = req.body.Username; 
    clinicAppointment.user_ID = req.body.user_ID; 
    clinicAppointment.date = req.body.date; 
    clinicAppointment.start_time = req.body.start_time; 
    clinicAppointment.End_time = req.body.End_time; 
    clinicAppointment.vaccine_name = req.body.vaccine_name; 
    
    await clinicAppointment.save();
    return res.send(clinicAppointment);
});



router.get("/",  async (req,res)=>{
    let row = await ClinicAppointment.find();
    return res.send(row);
});

router.delete("/:id",  async (req, res)=>{
    let clinicAppointment = await ClinicAppointment.findByIdAndDelete(req.params.id);
    return res.send(clinicAppointment);
});



module.exports = router;