var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var Rider_VaccineOrder = mongoose.Schema({
  my_ID: String,
  vaccine_name: String,
  vaccine_category: String,
  quantity: Number,
  price: Number,
});

var Rider_VaccineOrder = mongoose.model(
  "Rider_VaccineOrder",
  Rider_VaccineOrder
);

function validateRider_VaccineOrder(data) {
  const schema = Joi.object({
    my_ID: Joi.string(),

    vaccine_name: Joi.string().required(),
    vaccine_category: Joi.string().min(1).required(),
    quantity: Joi.number().min(1).required(),
    price: Joi.number().min(1).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.Rider_VaccineOrder = Rider_VaccineOrder;
module.exports.validate = validateRider_VaccineOrder;
