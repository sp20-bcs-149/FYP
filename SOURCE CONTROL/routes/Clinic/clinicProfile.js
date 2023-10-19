const { required } = require("@hapi/joi");
var express = require("express");
var router = express.Router();

var {
  ClinicProfile,
  validate,
} = require("../../model/ClinicModel/clinicProfile");

// add a new record
//
// router.post("/", async (req, res) => {
//   console.log("Received a POST request to /routes/Clinic/clinicProfile");
//   // ... rest of your route handler code
// });
router.post("/", async (req, res) => {
  console.log("f");
  let { error } = validate(req.body);
  console.log(error);
  if (error) return res.status(500).send(error.details[0].message);
  const { latitude, longitude } = req.body;
  console.log(typeof latitude);
  let profile = new ClinicProfile();
  profile.my_ID = req.body.my_ID;
  profile.my_ROLE = req.body.my_ROLE;
  profile.name = req.body.name;
  profile.registrationId = req.body.registrationId;
  profile.country = req.body.country;
  profile.city = req.body.city;
  profile.address = req.body.address;
  profile.postalCode = req.body.postalCode;
  profile.phoneno = req.body.phoneno;
  profile.latitude = req.body.latitude.toString();
  profile.longitude = req.body.longitude.toString();

  await profile.save();
  return res.send(profile);
});

router.get("/", async (req, res) => {
  const my_ID = req.query.my_ID;
  try {
    const clinic = await ClinicProfile.findOne({ my_ID: my_ID });

    if (!clinic) {
      return res.status(404).json({ error: "Clinic not found" });
    }

    res.json(clinic);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/AllClinic", async (req, res) => {
  try {
    console.log("request recived");
    const clinic = await ClinicProfile.find();

    if (!clinic) {
      console.log("here is problem");
      return res.status(404).json({ error: "User not found" });
    }

    // const parsedData = JSON.parse(user.jsonData); // Parse JSON string

    // res.json(parsedData);
    res.json(clinic);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  let profile = await ClinicProfile.findById(req.params.id);

  profile.my_ID = req.body.my_ID;
  profile.my_ROLE = req.body.my_ROLE;
  profile.name = req.body.name;
  profile.registrationId = req.body.registrationId;
  profile.country = req.body.country;
  profile.phoneno = req.body.phoneno;
  profile.latitude = req.body.latitude;
  profile.longitude = req.body.longitude;
  profile.city = req.body.city;
  profile.address = req.body.address;
  profile.postalCode = req.body.postalCode;

  await profile.save();
  return res.send(profile);
});

router.delete("/:id", async (req, res) => {
  let profile = await ClinicProfile.findByIdAndDelete(req.params.id);
  return res.send(profile);
});

module.exports = router;
