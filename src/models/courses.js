import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title:{
        type: String,
        require:true
    },

    category:{
        type:String,
        require:true
    },

   imageurl:{
        type:String,
        require:false,
   },

    descriptionShort:{
        type: String,
        require:true
    },

    descriptionLong:{
        type: String,
        require:false
    },

    price:{
        type:String,
        required:false,
    },

    creator:{
        type: mongoose.Schema.Types.ObjectId, //for refrencing the person who created it 
        required:false,
        ref:'userinfo'
    },

    rating:{
        type: Number,
        required:true
    }
 
});

const CourseModel = mongoose.model('course', courseSchema);

export default CourseModel;