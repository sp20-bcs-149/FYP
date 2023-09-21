var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var Clinic_VaccineRecord = mongoose.Schema({
        vaccine_name: String,
        manufacture: String,
        vaccine_type: String,
        expiry_date: String,
        quantity: String,
        dosage_information: String,
        adverse_reaction: String,
});

var Clinic_VaccineRecord = mongoose.model("Clinic_VaccineRecord", Clinic_VaccineRecord);

function validateClinic_VaccineRecord(data){
    const schema = Joi.object({
        vaccine_name: Joi.string().required(),
        manufacture: Joi.string().min(1).required(),
        vaccine_type: Joi.string().min(1).required(),
        expiry_date: Joi.string().min(1).required(),
        quantity: Joi.string().min(1).required(),
        dosage_information: Joi.string().min(1).required(),
        adverse_reaction: Joi.string().min(1).required(),
    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.Clinic_VaccineRecord = Clinic_VaccineRecord;
module.exports.validate = validateClinic_VaccineRecord;
