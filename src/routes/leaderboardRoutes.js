import express from "express";
import {leaderboardModel} from '../models/leaderboard.js';
import authenticateToken from '../middleware/authmiddleware.js';

const router = express.Router();

router.get('/show', authenticateToken, async (req, res) => {
    try{
        const entries = await leaderboardModel.find();
        res.json(entries)
    } 
    catch(err){
        console.error("Error fetching data", error);
        res.status(500).json({error: "Failed to fetch data"});
    }
})

router.post('/add', async (req, res) =>{
    const {name, score} = req.body;
    console.log("Received name : %s | Received score : %d", name, score);
    try{
        const entry = new leaderboardModel({name, score});
        await entry.save();
        res.status(201).json({message:'Entry saved successfully !'});
    }
    catch (error){
        console.error("Error saving entry: ", error);
        res.status(500).json({error:' Failed to save entry'});
    }
});


export default router;
