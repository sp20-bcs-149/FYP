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

// only for All pending (getmethod)
router.get("/All", async (req, res) => {
  const User_Token_id = req.query.User_Token_id;
  try {
    const user = await UserSchedule.find();
    

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

// only for completed (for report monthly)
router.get("/report/month", async (req, res) => {
  const clinic_my_ID = req.query.clinic_my_ID;
  // Create a new Date object to get the current date and time
  const date = new Date();
   let past_month =date.getMonth() - 1;

  let past_day = date.getDate() - 1;

  let past_week = date.getDate() - 7;

  let pastyear = date.getFullYear() - 1;

  // AT time createfolder == getmethod also run

  console.log('pastmonth------->' + past_month);
  try {
    const user = await UserSchedule.aggregate([
          {
            $match: {
              clinic_my_ID: clinic_my_ID,
              status: 'completed',
              // created_at: {
              //   $gte: past_week,
              //   $lte: date
              // }
            },
          },
          {
            $addFields: {
                  createdMonth: { $month: '$created_at' }
                        // createdDay: { $dayOfMonth: '$created_at' }, // Extract day of the month
                        // createdMonth: { $month: '$created_at' },    // Extract month
                        // createdYear: { $year: '$created_at' }       // Extract year
                }
          },
          {
            $match: {
              createdMonth: { $gte: past_month },
            },
          },
        ]);
   
    console.log("USER ----------- >" + user.length);

    if (!user) {
      console.log("here is problem");
      return res.status(404).json({ error: "User not found" });
    }

    // const parsedData = JSON.parse(user.jsonData); // Parse JSON string

    // res.json(parsedData);

    const vaccineNames = user.map(item => item.selectedVaccine);

    res.json(vaccineNames);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// only for completed (for daily)
router.get("/report/day", async (req, res) => {
  const clinic_my_ID = req.query.clinic_my_ID;
  // Create a new Date object to get the current date and time
  const date = new Date();

  let past_day = date.getDate() - 1;

  let past_week = date.getDate() - 7;

  let pastyear = date.getFullYear() - 1;

  // AT time createfolder == getmethod also run

  console.log('pastmonth------->' + past_day);
  try {
    const user = await UserSchedule.aggregate([
          {
            $match: {
              clinic_my_ID: clinic_my_ID,
              status: 'completed',
              // created_at: {
              //   $gte: past_week,
              //   $lte: date
              // }
            },
          },
          {
            $addFields: {
                  createdDay: {$dayOfMonth: '$created_at' }
                        // createdDay: { $dayOfMonth: '$created_at' }, // Extract day of the month
                        // createdMonth: { $month: '$created_at' },    // Extract month
                        // createdYear: { $year: '$created_at' }       // Extract year
                }
          },
          {
            $match: {
              createdDay: { $lte: past_day },
            },
          },
        ]);
   
    console.log("USER ----------- >" + user.length);

    if (!user) {
      console.log("here is problem");
      return res.status(404).json({ error: "User not found" });
    }

    // const parsedData = JSON.parse(user.jsonData); // Parse JSON string

    // res.json(parsedData);
    const vaccineNames = user.map(item => item.selectedVaccine);
    res.json(vaccineNames);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// only for completed (for daily)
router.get("/report/year", async (req, res) => {
  const clinic_my_ID = req.query.clinic_my_ID;
  // Create a new Date object to get the current date and time
  const date = new Date();


  let past_week = date.getDate() - 7;

  let pastyear = date.getFullYear() - 1;

  // AT time createfolder == getmethod also run

  console.log('pastmonth------->' + pastyear);
  try {
    const user = await UserSchedule.aggregate([
          {
            $match: {
              clinic_my_ID: clinic_my_ID,
              status: 'completed',
              // created_at: {
              //   $gte: past_week,
              //   $lte: date
              // }
            },
          },
          {
            $addFields: {
                  createdYear: { $year: '$created_at' }
                        // createdDay: { $dayOfMonth: '$created_at' }, // Extract day of the month
                        // createdMonth: { $month: '$created_at' },    // Extract month
                        // createdYear: { $year: '$created_at' }       // Extract year
                }
          },
          {
            $match: {
              createdYear: { $gte: pastyear },
            },
          },
        ]);
   
    console.log("USER ----------- >" + user.length);

    if (!user) {
      console.log("here is problem");
      return res.status(404).json({ error: "User not found" });
    }

    // const parsedData = JSON.parse(user.jsonData); // Parse JSON string

    // res.json(parsedData);
    const vaccineNames = user.map(item => item.selectedVaccine);

    res.json(vaccineNames);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// only for completed (for daily)
router.get("/report/week", async (req, res) => {
  const clinic_my_ID = req.query.clinic_my_ID;

  // Create a new Date object to get the current date and time
  const date = new Date();

  // Calculate the date for a week ago
  const pastWeekDate = new Date(date);
  pastWeekDate.setDate(pastWeekDate.getDate() - 7);

  try {
    const user = await UserSchedule.aggregate([
      {
        $match: {
          clinic_my_ID: clinic_my_ID,
          status: 'completed',
          created_at: {
            $gte: pastWeekDate, // Date from a week ago
            $lte: date,         // Current date
          },
        },
      },
      {
        $addFields: {
          createdYear: { $week: '$created_at' },
        },
      },
    ]);

    console.log("USER ----------- >" + user.length);

    if (!user) {
      console.log("here is a problem");
      return res.status(404).json({ error: "User not found" });
    }

    // Get the vaccine names from the filtered data
    const vaccineNames = user.map(item => item.selectedVaccine);

    res.json(vaccineNames);
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