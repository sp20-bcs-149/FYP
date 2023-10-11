var express = require('express');
var router = express.Router();

var {FamilyInside, validate} = require("../../model/UserModel/FamilyInside");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let Folder_already = await FamilyInside.findOne({ name : req.body.name });
    if(Folder_already) return res.status(400).send("Same name already exist Already Exist");


    let familyInside = new FamilyInside();
    familyInside.my_ID = req.body.my_ID;
    familyInside.name = req.body.name; 
    familyInside.gender = req.body.gender; 
    familyInside.height = req.body.height; 
    familyInside.weight = req.body.weight; 
    familyInside.dob = req.body.dob; 
    familyInside.cnic = req.body.cnic; 
    familyInside.SelectedvaccineString = req.body.SelectedvaccineString; 


    await familyInside.save();
    return res.send(familyInside);
});


// add a new record  
router.put("/:id", async (req, res)=>{
    let familyInside = await FamilyInside.findById(req.params.id);

    familyInside.my_ID = req.body.my_ID;
    familyInside.name = req.body.name; 
    familyInside.gender = req.body.gender; 
    familyInside.height = req.body.height; 
    familyInside.weight = req.body.weight; 
    familyInside.medical_history = req.body.medical_history; 
    familyInside.age = req.body.age; 


    await familyInside.save();
    return res.send(familyInside);
});


// all record from db in api format
router.get("/",  async (req,res)=>{
    const my_ID = req.query.my_ID;
    try {
        const familyInside = await FamilyInside.find({ my_ID: my_ID });

        if (!familyInside) {
            return res.status(404).json({ error: 'FamilyInside not found' });
        }

        // const parsedData = JSON.parse(user.jsonData); // Parse JSON string

        // res.json(parsedData);
        res.json(familyInside);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }

});

router.delete("/:id",  async (req, res)=>{
    let familyInside = await FamilyInside.findByIdAndDelete(req.params.id);
    return res.send(familyInside);
});



module.exports = router;