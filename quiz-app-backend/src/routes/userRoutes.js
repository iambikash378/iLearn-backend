import express from 'express';
import {userModel} from '../models/user.js';

const router = express.Router();

router.post("/add", (req, res) => {
    const {name, email, password, gender, dob} = req.body;
    userModel.create({name, email, password, gender, dob})
    .then(user => res.status(201).json({message:'New user created successfully', user}))
    .catch(err => res.status(500).json({error: err.message}));
});

router.post("/login", (req, res) => {
    const {useremail, password} = req.body;
    console.log(useremail, password)
    userModel.findOne({
        email : useremail
    }). then(user => {
        if (user) {
            console.log("found the user !")
            if(user.password === password){
                res.json({message: "login successful", user : user})
            }
            else{
                res.json("password is incorrect")
            }
        }
        else{
            console.log("can't find the user !")
            res.json("No record existed");
        }
    }) .catch(err => res.status(500).json({error: err.message}) )
})

export default router;