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


export const userModel = dynamoose.model('User', userSchema);
