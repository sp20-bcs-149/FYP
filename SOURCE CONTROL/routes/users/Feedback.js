var express = require('express');
var router = express.Router();

var {Feedback, validate} = require("../../model/UserModel/Feedback");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let feedback = new Feedback();
    feedback.feedback = req.body.feedback;
    feedback.satisfaction = req.body.satisfaction;

    await feedback.save();
    return res.send(feedback);
});












router.get("/notification", async (req, res) => {
  
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const daysToSubtract = 1; // Change this to the number of days you want to subtract

  try {
    const user = await UserSchedule.find({
      status: 'pending',
      selectedDay: currentDay+1 || currentDay+3 
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