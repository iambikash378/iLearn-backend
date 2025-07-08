import express from 'express';
import FilterModel from '../models/filters.js';

const filters = express.Router();

filters.get('/getFilters', async (req, res) =>{
    try{
            const all_filters = await FilterModel.find();
            res.json(all_filters)
    }
    catch(err){
        console.log("Error fetching filter data", err);
        res.status(500).json({error: "Failed to fetch data"});
    }
} )

export default filters;