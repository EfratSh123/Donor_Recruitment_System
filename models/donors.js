const {default: mongoose} = require('mongoose')
const Joi = require('joi');

const userSchema=new mongoose.Schema({
    id:String, 
    name:String, 
    phone:String, 
    email:String
})
const donorsModel = mongoose.model('donors', userSchema);
exports.donorsModel = donorsModel;

exports.validUser = (_bodyData)=>{
    // Joi.object get the schema for object
    let joiSchema=Joi.object({
    id:Joi.string().required(),
    name:Joi.string().required(),
    phone:Joi.string().required(),
    email:Joi.string().required(),
    })
    return joiSchema.validate(_bodyData);
}