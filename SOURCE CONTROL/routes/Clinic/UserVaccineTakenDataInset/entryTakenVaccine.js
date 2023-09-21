const express = require('express');
const router = express.Router();


var { UserTakenVaccine , validate} = require("../../../model/ClinicModel/EnteryUserRecord");

router.post("/", async(req,res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let row = new UserTakenVaccine();

    row.name = req.body.name;
    row.gender = req.body.gender;
    row.age = req.body.age;
    row.cnic = req.body.cnic;
    row.country = req.body.country;
    row.phoneno = req.body.phoneno;
    row.medical = req.body.medical;
    row.allergies = req.body.allergies;

    await row.save();
    return res.send(row);
});

router.get("/",  async (req,res)=>{
// router.get("/", auth , admin ,  async (req,res)=>{
    // console.log("this")
    // console.log(req.user); // avalible user data here without fetch using token/middleware
    let row = await UserTakenVaccine.find();
    return res.send(row);
});


// router.post("/temp", async (req,res)=>{
//     res.send('Hello, this is the Vaccine BRO');
// });


router.put("/:id", async (req, res)=>{
    let row = await UserTakenVaccine.findById(req.params.id);

    row.name = req.body.name;
    row.gender = req.body.gender;
    row.age = req.body.age;
    row.cnic = req.body.cnic;
    row.country = req.body.country;
    row.phoneno = req.body.phoneno;
    row.medical = req.body.medical;
    row.allergies = req.body.allergies;

    await row.save();
    return res.send(row);
});


router.delete("/:id",  async (req, res)=>{
    let row = await UserTakenVaccine.findByIdAndDelete(req.params.id);
    return res.send(row);
});


module.exports = router;