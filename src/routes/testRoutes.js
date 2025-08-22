import express from 'express';

const test = express.Router();

test.get('/testAPI', async (req, res) => {
    try{
        res.status(201).json({message:'bubsies'});
    }
    catch(err){
        res.status(500).json({error: "Failed to connect"});

    }
})

export default test;