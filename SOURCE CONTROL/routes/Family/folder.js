const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var {Family, validate} = require("../../model/Family");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let Folder_already = await Family.findOne({ Folder_Name : req.body.Folder_Name });
    if(Folder_already) return res.status(400).send("Folder with this name Already Exist");


    let family = new Family();
    family.my_ID = req.body.my_ID;
    family.Folder_Name = req.body.Folder_Name; 


    await family.save();
    return res.send(family);
});


// all record from db in api format
router.get("/",  async (req,res)=>{
    const my_ID = req.query.my_ID;
    try {
        const user = await Family.find({ my_ID: my_ID });

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
    let family = await Family.findByIdAndDelete(req.params.id);
    return res.send(family);
});


// update record
router.put("/:id", async (req, res) => {
  let family = await Family.findById(req.params.id);

  family.Folder_Name = req.body.Folder_Name; 

  await family.save();
  return res.send(family);
});


module.exports = router;