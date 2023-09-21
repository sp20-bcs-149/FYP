var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var AdminNews = mongoose.Schema({
        vaccine_name: String,
        information: String,
        allergies: String,
        treatment: String,
        Detail: String,
        side_effect: String,
});

var AdminNews = mongoose.model("AdminNews", AdminNews);

function validateAdminNews(data){
    const schema = Joi.object({
        vaccine_name: Joi.string().min(1).required(),
        information: Joi.string().min(1).required(),
        allergies: Joi.string().min(1).required(),
        treatment: Joi.string().min(1).required(),
        Detail: Joi.string().min(1).required(),
        side_effect: Joi.string().min(1).required(),

    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.AdminNews = AdminNews;
module.exports.validate = validateAdminNews;
