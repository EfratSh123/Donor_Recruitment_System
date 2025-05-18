const express = require('express')
const {machingsModel} = require("../models/machings")
const machings = require("../models/machings");
const router = express.Router();
router.use(express.json());

//הצגת פרטי המצינג
router.get('/', async (req, res) => {
    try {
        const maching1 = await machingsModel.find({});
        console.log(maching1);
        res.json(maching1);
    } catch (err) {
        res.status(500).send(err);
    }
});

//עדכון יעד או תאריך המצינג
router.put('/desOrDate/:Access_Permission', async(req, res) => {
    if(req.params.Access_Permission==1){
        const validBody = machingsModel(req.body);
    if(validBody.error)
        return res.status(400).json(validBody.error.details);
    try{
        await machingsModel.updateOne({}, req.body)
        console.log(validBody);
        res.json(validBody);
    }
    catch(error){
        res.status(400).send(error)}    
    }
    else
        res.send ("No Access Permission");
    })

module.exports = router;