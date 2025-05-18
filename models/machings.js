const {default: mongoose} = require('mongoose')
const Joi = require('joi');

const userSchema=new mongoose.Schema({
    name:String, 
    destination: Number, 
    destinationDate:String
})
const machingsModel = mongoose.model('machings', userSchema);
exports.machingsModel = machingsModel;

exports.validUser = (_bodyData)=>{
    // Joi.object get the schema for object
    let joiSchema=Joi.object({
    name:Joi.string().required(),
    destination:Joi.number().required(),
    destinationDate:Joi.string().required()
    })
    return joiSchema.validate(_bodyData);
}