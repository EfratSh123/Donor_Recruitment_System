const {default: mongoose} = require('mongoose')
const Joi = require('joi');

const userSchema=new mongoose.Schema({
    code:Number, 
    name:String, 
    sum:Number, 
    target:Number
})
const groupsModel = mongoose.model('groups', userSchema);
exports.groupsModel = groupsModel;

exports.validUser = (_bodyData)=>{
    // Joi.object get the schema for object
    let joiSchema=Joi.object({
    code:Joi.number().required(),
    name:Joi.string().required(),
    sum:Joi.number().required(),
    target:Joi.number().required()
    })
    return joiSchema.validate(_bodyData);
}