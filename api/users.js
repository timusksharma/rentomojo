const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

async function createuser(req,res){
    const salt = genSaltSync(10);
    password = hashSync(req.body.password, salt);
    const user = new User({
        email: req.body.email,
        password: password,
    })  
    try {
        const newUser = await user.save()
        res.status(201).json({
            success: 1,
            message: "User Created Successfuly"
        })
    } catch(err) {
        res.status(400).json({
            success: 0,
            message: err.message
        })
    }
    
}
async function login(req,res) {
    const users = await User.find({
        "$or": [{
          "email": (req.body.email).toLowerCase()
        }]
    })
    // error
    if(users.length <= 0) {
        res.status(400).json({
            success: false,
            message: "Incorrect email or password"
        })
    } else {
        const isPasswordCorrect = compareSync(req.body.password, users[0].password);
        if(isPasswordCorrect) {
            const jsonWebToken = sign({ user: req.body.email }, process.env.JWT_KEY, {
                expiresIn: "1000h"
            });
            res.status(200).json({
                success: true,
                token: jsonWebToken
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            })
        }
    }
    
}

router.post('/signup', createuser)
router.post('/login', login)

module.exports = router;