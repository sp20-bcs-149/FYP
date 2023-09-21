var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var Clinic_Accepted_Rejected_User = mongoose.Schema({
        Username: String,
        date: String,
        start_time: String,
        End_time: String,
        vaccine_name: String,
        user_ID: String,
        clinic_status : String,
});

var Clinic_Accepted_Rejected_User = mongoose.model("Clinic_Accepted_Rejected_User", Clinic_Accepted_Rejected_User);

function validateClinic_Accepted_Rejected_User(data){
    const schema = Joi.object({
        Username: Joi.string().required(),
        date: Joi.string().min(1).required(),
        start_time: Joi.string().min(1).required(),
        End_time: Joi.string().min(1).required(),
        vaccine_name: Joi.string().min(1).required(),
        user_ID: Joi.string().min(1).required(),
        clinic_status: Joi.string().min(1).required(),
    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.Clinic_Accepted_Rejected_User = Clinic_Accepted_Rejected_User;
module.exports.validate = validateClinic_Accepted_Rejected_User;
