import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        gender : String,
        dob : Date
    }
);

export const userModel = mongoose.model('userinfo', userSchema);
