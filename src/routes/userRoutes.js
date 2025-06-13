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
        if (!user) {
            console.log("Couldn't find the user !")
            res.json("No record exists")
            return Promise.reject("User not found !")
        }

            console.log("Found the user")
            bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(isMatch){
                    console.log("Matched Password too")
                    res.json({message: "login successful", user : user})
                }
                else{
                    console.log("Password didn't match")
                    res.json("password is incorrect")
                }
            })
            .catch(err => res.status(500).json({error: err.message}) )
        })
})

export default router;