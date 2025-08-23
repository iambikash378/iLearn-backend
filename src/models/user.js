import dynamoose from 'dynamoose';
import bcrypt from 'bcrypt';

const userSchema = new dynamoose.Schema(
    {
        "email": String,
        "username": String,
        "password": String,
        "phone": String,

        "isVerified":{
            "type":Boolean,
            "required":true
        },

        
    }
);

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 12);
});

export const userModel = mongoose.model('User', userSchema);
