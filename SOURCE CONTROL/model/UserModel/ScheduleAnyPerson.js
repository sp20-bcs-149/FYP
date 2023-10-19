var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserScheduleSchema = mongoose.Schema({
       created_at: { type: Date, default: Date.now },
        my_ID: String,
        clinic_my_ID: String,
        User_Token_id: String,
        selectedVaccine: String,
        selectedDay: Number,
        selectedSlot: Number,
        patientName: String,
        cnicNumber: String,
        status: String,
       currentTime: String,
       
});

var UserSchedule = mongoose.model("UserSchedule", UserScheduleSchema);

function validateUserSchedule(data){
    const schema = Joi.object({
        my_ID : Joi.string().required(),
        clinic_my_ID : Joi.string().required(),
        User_Token_id : Joi.string(),
        selectedVaccine: Joi.string().required(),
        selectedDay: Joi.number().required(),
        selectedSlot: Joi.number().required(),
        patientName: Joi.string().required(),
        cnicNumber: Joi.string().required(),
        status :Joi.required(),
       currentTime: Joi.required(),

    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.UserSchedule = UserSchedule;
module.exports.validate = validateUserSchedule;
