var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserFamilySchema = mongoose.Schema({
        my_ID: String,
        Folder_Name: String,

});

var Family = mongoose.model("Family", UserFamilySchema);

function validateFamily(data){
    const schema = Joi.object({
        my_ID : Joi.string(),
        Folder_Name : Joi.string().min(1).required(),

    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.Family = Family;
module.exports.validate = validateFamily;
