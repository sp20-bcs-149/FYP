var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserProfileSchema = mongoose.Schema({
        my_ID: String,
        my_ROLE: String,
        name: String,
        gender: String,
        country:String,
        phoneno:String,        
        dob: String,
        cnic: String,
        SelectedvaccineString: String,
});

var Profile = mongoose.model("Profile", UserProfileSchema);

function validateProfile(data){
    const schema = Joi.object({
        my_ID : Joi.string(),
        my_ROLE : Joi.string(),
        name : Joi.string().min(3).required(),
        gender :Joi.string().min(3).max(100).required(),
        country : Joi.string().min(2).required(),
        phoneno : Joi.string().min(2).required(),
        dob : Joi.string().required(),
        cnic : Joi.string().required(),
        SelectedvaccineString : Joi.string().required(),
    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.Profile = Profile;
module.exports.validate = validateProfile;
