var express = require('express');
var router = express.Router();

var {UserSchedule, validate} = require("../../model/UserModel/ScheduleAnyPerson");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let userSchedule = new UserSchedule();
    userSchedule.my_ID = req.body.my_ID;
    userSchedule.clinic_ID = req.body.clinic_ID;
    userSchedule.selectedVaccine = req.body.selectedVaccine; 
    userSchedule.selectedDay = req.body.selectedDay; 
    userSchedule.selectedSlot = req.body.selectedSlot; 
    userSchedule.patientName = req.body.patientName; 
    userSchedule.cnicNumber = req.body.cnicNumber; 
    userSchedule.status = req.body.status; 
    userSchedule.currentTime = req.body.currentTime; 


    await userSchedule.save();
    return res.send(userSchedule);
});


// only for pending (getmethod)
router.get("/pending", async (req, res) => {
  const my_ID = req.query.my_ID;
  try {
    const user = await UserSchedule.find({ my_ID: my_ID, status: 'pending' });
    

    if (!user) {
      console.log("here is problem");
      return res.status(404).json({ error: "User not found" });
    }

    // const parsedData = JSON.parse(user.jsonData); // Parse JSON string

    // res.json(parsedData);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// only for completed (getmethod)
router.get("/completed", async (req, res) => {
  const my_ID = req.query.my_ID;
  try {
    const user = await UserSchedule.find({ my_ID: my_ID, status: 'completed' });
    

    if (!user) {
      console.log("here is problem");
      return res.status(404).json({ error: "User not found" });
    }

    // const parsedData = JSON.parse(user.jsonData); // Parse JSON string

    // res.json(parsedData);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;