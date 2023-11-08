var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserFamilyInsideSchema = mongoose.Schema({
        my_ID: String,
        name: String,
        gender: String,
        height: String,
        weight: String,
        dob: String,
        cnic: String,
        SelectedvaccineString: String,
});

var FamilyInside = mongoose.model("FamilyInside", UserFamilyInsideSchema);

function validateFamilyInside(data){
    const schema = Joi.object({
        my_ID : Joi.string().required(),
        name: Joi.string().required(),
        gender: Joi.string().min(1).required(),
        height: Joi.string().min(1).required(),
        weight: Joi.string().min(1).required(),
        dob: Joi.string().required(),
        cnic: Joi.string().required(),
        SelectedvaccineString: Joi.string().required(),

    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.FamilyInside = FamilyInside;
module.exports.validate = validateFamilyInside;
