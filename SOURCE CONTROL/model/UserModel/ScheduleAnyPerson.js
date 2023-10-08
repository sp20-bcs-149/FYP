var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var UserScheduleSchema = mongoose.Schema({
        //my_ID: String,
        selectedVaccine: String,
        selectedDay: Number,
        selectedSlot: Number,
        patientName: String,
        cnicNumber: String,
});

var UserSchedule = mongoose.model("UserSchedule", UserScheduleSchema);

function validateUserSchedule(data){
    const schema = Joi.object({
        //my_ID : Joi.string().required(),
        selectedVaccine: Joi.string().required(),
        selectedDay: Joi.number().required(),
        selectedSlot: Joi.number().required(),
        patientName: Joi.string().required(),
        cnicNumber: Joi.string().required(),

    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.UserSchedule = UserSchedule;
module.exports.validate = validateUserSchedule;
