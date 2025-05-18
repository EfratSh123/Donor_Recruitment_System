//מתרימים
const express = require('express')
const {donatesModel,validUser} = require("../models/donates")
const donates = require("../models/donates");
const router = express.Router();
router.use(express.json());

//הצגת כל המתרימים
router.get('/', async (req, res) => {
    try {
        const donates1 = await donatesModel.find({});
        console.log(donates);
        res.json(donates1);
    } catch (err) {
        console.log(err.message)
        res.status(500).send(err);
    }
});
//חיפוש מתרים לפי ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const donor = await donatesModel.find({id:id});
        if (!donor) {
            return res.status(404).json({ message: 'donate not found' });
        }
        console.log(donor);
        res.json(donor);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message });
    }
});
//הוספת מתרים
router.post('/', async(req, res) => {
        let validBody = validUser(req.body)
        if(validBody.error)
            return res.status(400).json(validBody.error.details);
        let user=new donatesModel(req.body);
        await user.save()
        console.log(req.body);
        res.json(req.body)
    }
);
//מחיקת מתרים
router.delete("/:idToDelete/:Access_Permission",async (req,res)=>{
    if(req.params.Access_Permission==1){
    try
    {
    let data = await donatesModel.deleteOne({id:req.params.idToDelete})
    console.log(data)
    //if it's success we get n=1 in data object
    res.json(data);
    }
    catch(err){
        console.log(err.message)
    res.status(400).send(err)
    }
    }
    else
        res.send ("No Access Permission");
})

//עדכון מתרים
router.put("/:id/:Access_Permission", async (req,res)=>{
    if(req.params.Access_Permission==1){
        const validBody=donatesModel(req.body);
    if(validBody.error)
        return res.status(400).json(validBody.error.details);
    try{
        await donatesModel.updateOne({id:req.params.id}, req.body)
        const don = await donatesModel.find({}).where('id').equals(req.params.id);
        res.json(don);

    }
    catch(error){
        res.status(400).send(error)}    
    }
    else
        res.send ("No Access Permission");
    })

module.exports = router;
