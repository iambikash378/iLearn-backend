import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';
import authenticate from './middleware/authmiddleware.js';
import coursesRoutes from './routes/courseRoutes.js';
import filterRoutes from './routes/filterRoutes.js';
import testRoutes from './routes/testRoutes.js';

dotenv.config();

const PORT = process.env.PORT  || 8000;
const MONGO_URI = process.env.MONGO_URI;

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
app.use('/leaderboard', authenticate, leaderboardRoutes);
app.use('/courses', coursesRoutes);
app.use('/filters',filterRoutes)
app.use('/test', testRoutes)


app.listen(PORT, () => {
    console.log('Server listening on http://localhost:%s', PORT);
} )

