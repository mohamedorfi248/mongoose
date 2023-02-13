//1 require express
const express = require('express');
const Contact=require("../model/Contact")
const router = express.Router();

///Routes

//test 
router.get('/test',(req,res)=>{
    res.send("hello world");

})
//add contact
router.post('/add',async (req, res )=>{
    try {
        const { name, email , phone } = req.body;
        const newContact = new Contact({ name, email, phone});
        await newContact.save();
        res.status(200).send({msg:"Contact added successfully...",newContact});

    } catch (error) {
        res.status(400).send({msg:"Contact can not be added",error}) ;
    }
})
//get all contact
router.get('/all',async (req,res)=>{
    try {
        const listContacts = await Contact.find();
        res.status(200).send({msg:"this is the list of contact...",listContacts});
    } catch (error) {
        res.status(400).send({msg:" Can not get all contact... ",error}) ;
    }
})
//get one contact 
router.get('/:id',async (req, res)=>{
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id});
        res.status(200).send({msg:"I get the contact...",contactToGet});
    } catch (error) {
        res.status(400).send({msg:"Can not get This contact  ... ",error}) ;
    }
}) 
//delete contact
router.delete('/:_id', async (req, res)=>{
    try {
        const {_id}=req.params;
        await Contact.findOneAndDelete({_id});
        res.status(200).send({msg:" Contact deleted..."});
    } catch (error) {
        res.status(400).send({msg:"Can not delete This contact  ... ",error}) ;
    }
})
//edit contact
router.put('/:_id',async (req,res)=>{
try {
    const {_id} = req.params;
    await Contact.findByIdAndUpdate({_id}, {$set: {...req.body}});
    res.status(200).send({msg:" Contact edited successfully ..."});

} catch (error) {
    res.status(400).send({msg:"Can not edit This contact  ... ",error}) ;
}
})

//exportation 
module.exports = router ;