const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var {AdminAlert, validate} = require("../../model/Admin/Alert");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let adminAlert = new AdminAlert();
    adminAlert.disease = req.body.disease; 
    adminAlert.prevention = req.body.prevention; 
    adminAlert.symptoms = req.body.symptoms; 
    adminAlert.date = req.body.date; 
    adminAlert.time = req.body.time; 
    adminAlert.country = req.body.country; 


    await adminAlert.save();
    return res.send(adminAlert);
});




router.put("/:id", async (req, res)=>{
    let adminAlert = await AdminAlert.findById(req.params.id);

    adminAlert.disease = req.body.disease; 
    adminAlert.prevention = req.body.prevention; 
    adminAlert.symptoms = req.body.symptoms; 
    adminAlert.date = req.body.date; 
    adminAlert.time = req.body.time; 
    adminAlert.country = req.body.country; 
    
    await adminAlert.save();
    return res.send(adminAlert);
});



router.get("/",  async (req,res)=>{
    let row = await AdminAlert.find();
    return res.send(row);
});

router.delete("/:id",  async (req, res)=>{
    let adminAlert = await AdminAlert.findByIdAndDelete(req.params.id);
    return res.send(adminAlert);
});



module.exports = router;