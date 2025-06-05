import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

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
app.use(express.json())

const Schema = mongoose.Schema;

const newSchema = new Schema(
    {
        name: String,
        score: Number,
    }
);

const leaderboardModel = mongoose.model('leaderboard', newSchema)


app.post('/leaderboard/add', async (req, res) =>{
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


app.get('/leaderboard/show', async (req, res) => {
    try{
        const entries = await leaderboardModel.find();
        res.json(entries)
    } 
    catch(err){
        console.error("Error fetching data", error);
        res.status(500).json({error: "Failed to fetch data"});
    }

})


app.listen(PORT, () => {
    console.log('Server listening on http://localhost:%s', PORT);
} )

