var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var FeedbackSchema = mongoose.Schema({      
    feedback: String,
    satisfaction: String,

       
});

var Feedback = mongoose.model("AppFeedback", FeedbackSchema);

function validateFeedback(data){
    const schema = Joi.object({
        feedback : Joi.string().required(),
        satisfaction : Joi.string().required(),

    })
    return schema.validate(data, {abortEarly: false});
}


module.exports.Feedback = Feedback;
module.exports.validate = validateFeedback;
