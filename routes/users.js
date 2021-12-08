const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User =require ('../models/User');

router.post('/',[
    check('name','لطفا نام خود را وارد کنید').not().isEmpty(),
    check('email','لطفا یک ایمیل صحیح وارد کنید').isEmail(),
    check('password','لطفا یک پسوردبا بیشتر از 5 حرف انتخاب کنید').isLength({ min:5})
],
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name, email,password} = req.body;
    try {
        let user = await User.findOne({ email })
        if(user){
            return res.status(400).json({msg:"ایمیل قبلا برای کاربر دیگری ثبت شده"});
        }
        user = new User({
            name,email,password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        const payload = {
            user:{
                id: user.id
            }
        }
        jwt.sign(payload,config.get('jwtsecret'),{
            expiresIn:360000
        }, (err, token) =>{
            if(err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('سرور مشکل دارد');
    }
});

module.exports = router;