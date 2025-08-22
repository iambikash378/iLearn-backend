import express from 'express';
import {userModel} from '../models/user.js';
import brcypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const user = express.Router();

user.post("/add", (req, res) => {
    const {name, email, password, gender, dob} = req.body;
    userModel.create({name, email, password, gender, dob})
    .then(user => res.status(201).json({message:'New user created successfully', user}))
    .catch(err => res.status(500).json({error: err.message}));
});

user.post("/login", async (req, res) => {
    const {useremail, password} = req.body;
    console.log(useremail, password)
    
    try{
        const user = await userModel.findOne({email : useremail})
        
        if (!user){
            console.log("Couldn't find the user !")
            return res.json("No record exists")
        }

        console.log("Found the user");

        const isMatch = await brcypt.compare(password, user.password);

        if(isMatch){
            console.log("Matched password too !");
            const token = jwt.sign({
                email: user.email
            }, process.env.JWT_SECRET, {expiresIn: '1h'});
            
            return res.json({Message: "Login Successful", user: user.name, token: token});
            
        }
        else{
            console.log("Password didn't match");
            return res.json("Password is incorrect")
        }
    }

        catch (err) {
            console.error("Error during login ", err);
            return res.status(500).json({error : err.message });
        }
    
})

export default user;