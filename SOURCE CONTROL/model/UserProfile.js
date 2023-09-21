var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserProfileSchema = mongoose.Schema({
        my_ID: String,
        my_ROLE: String,
        name: String,
        gender: String,
        age:Number,
        cnic:Number,
        country:String,
        phoneno:String,        
        medical:String,        
        allergies:String,        
});

var Profile = mongoose.model("Profile", UserProfileSchema);

function validateProfile(data){
    const schema = Joi.object({
        my_ID : Joi.string(),
        my_ROLE : Joi.string(),
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


module.exports.Profile = Profile;
module.exports.validate = validateProfile;
