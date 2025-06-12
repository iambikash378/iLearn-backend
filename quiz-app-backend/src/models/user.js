import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        gender : String,
        dob : Date
    }
);

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 12);
});

export const userModel = mongoose.model('userinfo', userSchema);
