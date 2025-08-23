import express from 'express';
import {userModel} from '../models/user.js';
import brcypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { marshall } from '@aws-sdk/util-dynamodb';

import ddb from 'dynamoose/dist/aws/ddb/index.js';
import { PutItemCommand } from '@aws-sdk/client-dynamodb';

dotenv.config();

const user = express.Router();

user.post("/add", async (req, res) => {
    const {username, email, password} = req.body;

    try{
        const hashedPassword = await brcypt.hash(password, 12)
        const addUser = new PutItemCommand({
            TableName: "users",
            Item:marshall({
                username: username,
                email: email,
                password: password,
            }),
        })

        const result = await ddb.send(addUser)

        res.status(201).json({message: "User added successfully", result})
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }

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