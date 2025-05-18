//קבוצות
const express = require('express')
const {groupsModel,validUser} = require("../models/groups")
const {donatesModel,validUser1} = require("../models/donates")
const groups = require('../models/groups');
const donates = require('../models/donates');
const router = express.Router();
router.use(express.json());
//הצגת כל הקבוצות
router.get('/', async (req, res) => {
    try {
        const groupsM = await groupsModel.find({});
        console.log(groups);
        res.json(groupsM);
    } catch (err) {
        res.status(500).send(err);
    }
});
//הצגת קבוצות ומתרימים בכל קבוצה
router.get('/donates', async (req, res) => {
    try {
        let result = [];
        const groupsM = await groupsModel.find();
        const donatesM = await donatesModel.find();
        groupsM.forEach((group) => {
            const matchingGroups = donatesM.filter((donate) => donate.groupCode === group.code);
            console.log(`Donates for ${group.name} group (code: ${group.code}): `, JSON.stringify(matchingGroups));
            result.push({ group, donatesM: matchingGroups });
        });
    res.json(result);
    }
    catch (err) {
        res.status(500).send(err);
} 
});
//הוספת קבוצה
router.post('/', async(req, res) => {
    let validBody = validUser(req.body)
    if(validBody.error)
        return res.status(400).json(validBody.error.details);
    let user=new groupsModel(req.body);
    await user.save()
    console.log(req.body);
    res.json(req.body)
    });
module.exports = router;
