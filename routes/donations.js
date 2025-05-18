//תרומות
const express = require('express')
const donations = require('../models/donation');
const {donationsModel,validUser} = require("../models/donation")
const donors = require('../models/donors');
const router = express.Router();
router.use(express.json());

//הצגת כל התרומות
router.get('/', async (req, res) => {
    try {
        const donations1 = await donationsModel.find({});
        console.log(donations);
        res.json(donations1);
    } catch (err) {
        res.status(500).send(err);
    }
});
//הצגת תרומות של מתרים X
router.get('/donateId/:donateId', async (req, res) => {
    try {
        const id = req.params.donateId;
        const donation = await donationsModel.find({donateId:id});
        if (!donation) {
            return res.status(404).json({ message: 'donation of this donor not found' });
        }
        console.log(donation)
        res.json(donation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//הצגת תרומות של תורם X
router.get('/donorId/:donorId', async (req, res) => {
    try {
        const id = req.params.donorId;
        const donation = await donationsModel.find({donorId:id});
        if (!donation) {
            return res.status(404).json({ message: 'donation of this donor not found' });
        }
        console.log(donation)
        res.json(donation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//הוספת תרומה
router.post('/',async(req, res) => {
    let validBody = validUser(req.body); 
        if(validBody.error)
            return res.status(400).json(validBody.error.details);
    let user=new donationsModel(req.body);
    await user.save()
    console.log(req.body)
    res.json(req.body)
});



module.exports = router;
