import {S3Client} from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const s3client = new S3Client({
    region: process.env.AWS_REGION,
    credentials:{
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    }
})

const params ={
    bucket_name: bucketName,
    key:`courses/${courseId}/`
}

function addNewPrefixes(params){
    
}