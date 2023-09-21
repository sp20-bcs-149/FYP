const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var {AdminNews, validate} = require("../../model/Admin/News");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let adminNews = new AdminNews();
    adminNews.vaccine_name = req.body.vaccine_name; 
    adminNews.information = req.body.information; 
    adminNews.allergies = req.body.allergies; 
    adminNews.treatment = req.body.treatment; 
    adminNews.Detail = req.body.Detail; 
    adminNews.side_effect = req.body.side_effect; 


    await adminNews.save();
    return res.send(adminNews);
});




router.put("/:id", async (req, res)=>{
    let adminNews = await AdminNews.findById(req.params.id);

//    let adminNews = new AdminNews();
    adminNews.vaccine_name = req.body.vaccine_name; 
    adminNews.information = req.body.information; 
    adminNews.allergies = req.body.allergies; 
    adminNews.treatment = req.body.treatment; 
    adminNews.Detail = req.body.Detail; 
    adminNews.side_effect = req.body.side_effect; 

    await adminNews.save();
    return res.send(adminNews);
});



router.get("/",  async (req,res)=>{
    let row = await AdminNews.find();
    return res.send(row);
});

router.delete("/:id",  async (req, res)=>{
    let adminNews = await AdminNews.findByIdAndDelete(req.params.id);
    return res.send(adminNews);
});



module.exports = router;