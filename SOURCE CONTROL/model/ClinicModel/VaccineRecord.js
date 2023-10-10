var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var Clinic_VaccineRecord = mongoose.Schema({
<<<<<<< Updated upstream
  my_ID: String,
=======
>>>>>>> Stashed changes
  vaccine_name: String,
  manufacture: String,
  vaccine_type: String,
  quantity: String,
  price: Number,
});

var Clinic_VaccineRecord = mongoose.model(
  "Clinic_VaccineRecord",
  Clinic_VaccineRecord
);

function validateClinic_VaccineRecord(data) {
  const schema = Joi.object({
<<<<<<< Updated upstream
    my_ID: Joi.string(),
=======
>>>>>>> Stashed changes
    vaccine_name: Joi.string().required(),
    manufacture: Joi.string().min(1).required(),
    vaccine_type: Joi.string().min(1).required(),
    quantity: Joi.string().min(1).required(),
    price: Joi.number().min(1).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.Clinic_VaccineRecord = Clinic_VaccineRecord;
module.exports.validate = validateClinic_VaccineRecord;
