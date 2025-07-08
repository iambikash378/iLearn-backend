import express from 'express';
import CourseModel from '../models/courses.js';

const courses = express.Router();

courses.get('/all', async (req, res) =>{
    try{
            const all_courses = await CourseModel.find();
            res.json(all_courses)
    }
    catch(err){
        console.log("Error fetching courses data", err);
        res.status(500).json({error: "Failed to fetch data"});
    }
} )

export default courses;