var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserFamilyInsideSchema = mongoose.Schema({
        my_ID: String,
        name: String,
        gender: String,
        height: String,
        weight: String,
        medical_history: String,
        age: String,
});

var FamilyInside = mongoose.model("FamilyInside", UserFamilyInsideSchema);

function validateFamilyInside(data){
    const schema = Joi.object({
        my_ID : Joi.string().required(),
        name: Joi.string().min(1).required(),
        gender: Joi.string().min(1).required(),
        height: Joi.string().min(1).required(),
        weight: Joi.string().min(1).required(),
        medical_history: Joi.string().min(1).required(),
        age: Joi.string().min(1).max(2).required(),

    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.FamilyInside = FamilyInside;
module.exports.validate = validateFamilyInside;
