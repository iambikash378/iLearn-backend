import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema(
    {
        name: String,
        score: Number,
    }
);

const leaderboardModel = mongoose.model('leaderboard', leaderboardSchema);

export default leaderboardModel;