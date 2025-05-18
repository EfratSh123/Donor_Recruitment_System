//תורמים
const express = require('express')
const {donorsModel,validUser} = require("../models/donors")
const donors = require('../models/donors');
const router = express.Router();
router.use(express.json());

//הצגת כל התורמים
router.get('/', async (req, res) => {
    try {
        const donors1 = await donorsModel.find({});
        console.log(donors);
        res.json(donors1);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/', async(req, res) => {
    const validBody = validUser(req.body); 
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    const user=new donorsModel(req.body);
    await user.save()
    console.log(req.body);
    res.json(req.body)
});
module.exports = router;
