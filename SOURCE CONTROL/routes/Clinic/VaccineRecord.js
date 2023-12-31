const { required } = require("@hapi/joi");
var express = require("express");
var router = express.Router();

var {
  Clinic_VaccineRecord,
  validate,
} = require("../../model/ClinicModel/VaccineRecord");

// add a new record
router.post("/", async (req, res) => {
  let { error } = validate(req.body);
  console.log(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log(req.body);

  let clinic_VaccineRecord = new Clinic_VaccineRecord();
  clinic_VaccineRecord.my_ID = req.body.my_ID;
  clinic_VaccineRecord.vaccine_name = req.body.vaccine_name;
  clinic_VaccineRecord.manufacture = req.body.manufacture;
  clinic_VaccineRecord.vaccine_type = req.body.vaccine_type;
  clinic_VaccineRecord.quantity = req.body.quantity;
  clinic_VaccineRecord.price = req.body.price;

  await clinic_VaccineRecord.save();
  return res.send(clinic_VaccineRecord);
});

router.put("/:id", async (req, res) => {
  let clinic_VaccineRecord = await Clinic_VaccineRecord.findById(req.params.id);

  clinic_VaccineRecord.my_ID = req.body.my_ID;
  clinic_VaccineRecord.vaccine_name = req.body.vaccine_name;
  clinic_VaccineRecord.manufacture = req.body.manufacture;
  clinic_VaccineRecord.vaccine_type = req.body.vaccine_type;
  clinic_VaccineRecord.quantity = req.body.quantity;
  clinic_VaccineRecord.price = req.body.price;

  await clinic_VaccineRecord.save();
  return res.send(clinic_VaccineRecord);
});
router.get("/vaccines/:my_ID", async (req, res) => {
  const my_ID = req.params.my_ID; // Access clinic's ID from route parameter
  let row = await Clinic_VaccineRecord.find({ my_ID: my_ID });
  return res.send(row);
});

router.get("/", async (req, res) => {
  let row = await Clinic_VaccineRecord.find();
  return res.send(row);
});

router.get("/my_ID", async (req, res) => {
  const my_ID = req.query.my_ID;

  let row = await Clinic_VaccineRecord.find({ my_ID: my_ID });
  const vaccineNames = row.map(item => item.vaccine_name);
  return res.send(vaccineNames);
});

router.get("/ID", async (req, res) => {
  const my_ID = req.query.my_ID;

  let row = await Clinic_VaccineRecord.find({ my_ID: my_ID });
  return res.send(row);
});

router.get("/name", async (req, res) => {
  const vaccine_name = req.query.vaccine_name;
  const regex = new RegExp(vaccine_name, "i");

  let row = await Clinic_VaccineRecord.find({ vaccine_name: regex });
  return res.send(row);
});

router.delete("/:id", async (req, res) => {
  let clinic_VaccineRecord = await Clinic_VaccineRecord.findByIdAndDelete(req.params.id);
  return res.send(clinic_VaccineRecord);
});


module.exports = router;
