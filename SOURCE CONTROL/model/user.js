var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role : String,
});


var User = mongoose.model("User", UserSchema);

function validateUser(data){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
        role: Joi.string().min(3).required(),
    })
    return schema.validate(data, {abortEarly: false});
}

function validateUserLogin(data){
    const schema = Joi.object({
        email: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.User = User;
module.exports.validate = validateUser; // for sign up
module.exports.validate = validateUserLogin;  // for login
