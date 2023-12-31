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
    clinicOrderPlacement.quantity = req.body.quantity; 
    clinicOrderPlacement.clinic_name = req.body.clinic_name; 
    clinicOrderPlacement.address = req.body.address; 
    clinicOrderPlacement.order_status = req.body.order_status; 
    clinicOrderPlacement.longitude = req.body.longitude; 
    clinicOrderPlacement.latitude = req.body.latitude; 

    await clinicOrderPlacement.save();
    return res.send(clinicOrderPlacement);
});


router.get("/", async (req, res) => {
  try {
    const row = await ClinicOrderPlacement.find({
      order_status: { $in: ["Pending", "Accepted"] }
    });
    return res.send(row);
  } catch (error) {
    // Handle any potential errors
    return res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/all", async (req, res) => {
  try {
    const row = await ClinicOrderPlacement.find();
    return res.send(row);
  } catch (error) {
    // Handle any potential errors
    return res.status(500).json({ error: "Internal server error" });
  }
});

// update record
router.put("/:id", async (req, res) => {
  let clinicOrderPlacement = await ClinicOrderPlacement.findById(req.params.id);

    clinicOrderPlacement.order_status = req.body.order_status; 


  await clinicOrderPlacement.save();
  return res.send(clinicOrderPlacement);
});


module.exports = router;