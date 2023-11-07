var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var ClinicOrderPlacement = mongoose.Schema({
        clinic_ID: String,
        vaccine_name: String,
        price: String,
        quantity: Number,
        clinic_name: String,
        address: String,
        order_status: String,
        longitude: Number,
        latitude: Number,
});

var ClinicOrderPlacement = mongoose.model("ClinicOrderPlacement", ClinicOrderPlacement);

function validateClinicOrderPlacement(data){
    const schema = Joi.object({
        clinic_ID: Joi.string().required(),
        vaccine_name: Joi.string().min(1).required(),
        price: Joi.string().min(1).required(),
        quantity: Joi.number().min(1).required(),
        clinic_name: Joi.string().min(1).required(),
        address: Joi.string().min(1).required(),
        order_status: Joi.string().min(1).required(),
        longitude: Joi.number().min(1).required(),
        latitude: Joi.number().min(1).required(),
    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.ClinicOrderPlacement = ClinicOrderPlacement;
module.exports.validate = validateClinicOrderPlacement;
