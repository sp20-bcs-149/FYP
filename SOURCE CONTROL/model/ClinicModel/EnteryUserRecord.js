var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserTakenVaccineSchema = mongoose.Schema({
        name: String,
        gender: String,
        age:Number,
        cnic:Number,
        country:String,
        phoneno:String,        
        medical:String,        
        allergies:String,        
});

var UserTakenVaccine = mongoose.model("UserTakenVaccineEntryRecord", UserTakenVaccineSchema);

function validateUserTakenVaccine(data){
    const schema = Joi.object({
        name : Joi.string().min(3).required(),
        gender :Joi.string().min(3).max(100).required(),
        age : Joi.number().min(1).required(),
        cnic : Joi.number().min(2).required(),
        country : Joi.string().min(2).required(),
        phoneno : Joi.string().min(2).required(),
        medical : Joi.string().min(2).required(),
        allergies : Joi.string().min(2).required()
    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.UserTakenVaccine = UserTakenVaccine;
module.exports.validate = validateUserTakenVaccine;
