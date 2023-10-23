var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var ClinicProfileSchema = mongoose.Schema({
  my_ID: String,
  my_ROLE: String,
  name: String,
  registrationId: Number,
  country: String,
  phoneno: String,
  latitude: Number,
  longitude: Number,
  address: String,
  city: String,
  postalCode: Number,
});

var clinicProfile = mongoose.model("ClinicProfile", ClinicProfileSchema);

function validateclinicProfile(data) {
  const schema = Joi.object({
    my_ID: Joi.string(),
    my_ROLE: Joi.string(),
    name: Joi.string().min(3).required(),
    registrationId: Joi.number().min(2).required(),
    country: Joi.string().min(2).required(),
    phoneno: Joi.string().min(2).required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    longitude: Joi.number().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    postalCode: Joi.number().required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.ClinicProfile = clinicProfile;
module.exports.validate = validateclinicProfile;
