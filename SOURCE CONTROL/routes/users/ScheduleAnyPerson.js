var express = require('express');
var router = express.Router();

var {UserSchedule, validate} = require("../../model/UserModel/ScheduleAnyPerson");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let userSchedule = new UserSchedule();
    userSchedule.my_ID = req.body.my_ID;
    userSchedule.clinic_my_ID = req.body.clinic_my_ID;
    userSchedule.User_Token_id = req.body.User_Token_id;
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




// update record
router.put("/:id", async (req, res) => {
  let userSchedule = await UserSchedule.findById(req.params.id);

    userSchedule.status = req.body.status; 


  await userSchedule.save();
  return res.send(userSchedule);
});
// only for All pending (getmethod)
router.get("/All/pending", async (req, res) => {
  const User_Token_id = req.query.User_Token_id;
  try {
    const user = await UserSchedule.find({ User_Token_id: User_Token_id});
    

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


// only for completed (getmethod)
router.get("/clinic_my_ID", async (req, res) => {
  const clinic_my_ID = req.query.clinic_my_ID;
  try {
    const user = await UserSchedule.find({ clinic_my_ID: clinic_my_ID, status: 'pending' });
    

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


router.get("/notification", async (req, res) => {
  
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const daysToSubtract = 1; // Change this to the number of days you want to subtract

  try {
    const user = await UserSchedule.find({
      status: 'pending',
      selectedDay: currentDay+1,
    });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = router;