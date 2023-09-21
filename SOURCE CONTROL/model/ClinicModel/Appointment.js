var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var ClinicAppointment = mongoose.Schema({
        Username: String,
        date: String,
        start_time: String,
        End_time: String,
        vaccine_name: String,
        user_ID: String,
});

var ClinicAppointment = mongoose.model("ClinicAppointment", ClinicAppointment);

function validateClinicAppointment(data){
    const schema = Joi.object({
        Username: Joi.string().required(),
        date: Joi.string().min(1).required(),
        start_time: Joi.string().min(1).required(),
        End_time: Joi.string().min(1).required(),
        vaccine_name: Joi.string().min(1).required(),
        user_ID: Joi.string().min(1).required(),
    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.ClinicAppointment = ClinicAppointment;
module.exports.validate = validateClinicAppointment;
