const {default: mongoose} = require('mongoose')
const Joi = require('joi');

const userSchema=new mongoose.Schema({
    code:Number,
    sum:Number,
    donorId:String, 
    donateId:String
})
const donationsModel = mongoose.model('donations', userSchema);
exports.donationsModel = donationsModel;

exports.validUser = (_bodyData)=>{
    // Joi.object get the schema for object
    let joiSchema=Joi.object({
    code:Joi.number().required(),
    sum:Joi.number().required(),
    donorId:Joi.string().required(),
    donateId:Joi.string().required()
    })
    return joiSchema.validate(_bodyData);
}