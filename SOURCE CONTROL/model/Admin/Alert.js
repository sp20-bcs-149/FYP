var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var AdminAlert = mongoose.Schema({
        disease: String,
        prevention: String,
        symptoms: String,
        date: String,
        time: String,
        country: String,
});

var AdminAlert = mongoose.model("AdminAlert", AdminAlert);

function validateAdminAlert(data){
    const schema = Joi.object({
        disease: Joi.string().required(),
        prevention: Joi.string().min(1).required(),
        symptoms: Joi.string().min(1).required(),
        date: Joi.string().min(1).required(),
        time: Joi.string().min(1).required(),
        country: Joi.string().min(1).required(),
    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.AdminAlert = AdminAlert;
module.exports.validate = validateAdminAlert;
