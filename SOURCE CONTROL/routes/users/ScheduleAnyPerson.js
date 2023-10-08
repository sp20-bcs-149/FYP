var express = require('express');
var router = express.Router();

var {UserSchedule, validate} = require("../../model/UserModel/ScheduleAnyPerson");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let userSchedule = new UserSchedule();
//    userSchedule.my_ID = req.body.my_ID;
    userSchedule.selectedVaccine = req.body.selectedVaccine; 
    userSchedule.selectedDay = req.body.selectedDay; 
    userSchedule.selectedSlot = req.body.selectedSlot; 
    userSchedule.patientName = req.body.patientName; 
    userSchedule.cnicNumber = req.body.cnicNumber; 


    await userSchedule.save();
    return res.send(userSchedule);
});

module.exports = router;