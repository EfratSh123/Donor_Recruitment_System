const {default: mongoose} = require('mongoose')
const Joi = require('joi');

const userSchema=new mongoose.Schema({
    id:String,
    groupCode:Number,
    name:String,
    phone:String
})
const donatesModel = mongoose.model('donates', userSchema);
exports.donatesModel = donatesModel;
//module.exports = mongoose.model('donates', userSchema,'donates');

exports.validUser = (_bodyData)=>{
    // Joi.object get the schema for object
    const joiSchema=Joi.object({
    id:Joi.string().required(),
    groupCode:Joi.number().required(),
    name:Joi.string().required(),
    phone:Joi.string().required()
    })
    return joiSchema.validate(_bodyData);
}