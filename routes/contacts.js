const express = require('express');

const router = express.Router();

const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User =require ('../models/User');
const Contact =require ('../models/Contacts');

// get All Contacts of One User
router.get('/',auth,async (req,res)=>{
    try {
        const contacts = await Contact.find({ user:req.user.id}).sort({date:-1});
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('مشکل سرور');
    }
});

// add Contact to One user
router.post('/',[auth,[
    check('name','نام را وارد کنید').not().isEmpty()
]],
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name, email,phone,type} = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('مشکل از سرور')
    }
});

router.put('/:id', auth, async (req, res) => {
    const {name, email, phone, type} = req.body;
  
    // Build contact object
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;
  
    try {
      let contact = await Contact.findById(req.params.id);
  
      if (!contact) return res.status(404).json({msg: 'مخاطب وجود ندارد'});
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({msg: 'شما مجاز نیستید'});
      }
  
      contact = await Contact.findByIdAndUpdate(
        req.params.id,
        {$set: contactFields},
        {new: true},
      );
  
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('مشکل سرور');
    }
  });

router.delete('/:id', auth, async (req, res) => {
    try {
      let contact = await Contact.findById(req.params.id);
  
      if (!contact) return res.status(404).json({msg: 'مخاطب پیدا نشد'});
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({msg: 'شما مجاز نیستید'});
      }
  
      await Contact.findByIdAndRemove(req.params.id);
  
      res.json({msg: 'مخاطب پاک شد'});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;