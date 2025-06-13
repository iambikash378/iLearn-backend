import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import userRoutes from './routes/userRoutes.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';

const PORT = 8000;
const MONGO_URI = 'mongodb://localhost:27017/random';

mongoose.connect(
    MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology : true,
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("MongoDB connection error:", err);
    });

const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);
app.use('/leaderboard', leaderboardRoutes);


app.listen(PORT, () => {
    console.log('Server listening on http://localhost:%s', PORT);
} )

