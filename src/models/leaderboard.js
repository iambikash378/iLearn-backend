import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema(
    {
        name: String,
        score: Number,
    }
);

export const leaderboardModel = mongoose.model('leaderboard', leaderboardSchema);
