import mongoose, { Schema } from "mongoose";



const ProjectModel= new Schema({
    project_name :{
        type:String,
        required:true,
    },
   location:{
    type: String,
    required: true,
   },
   address:{
    type: String,
    required:true,
   },
   budget:{
    type:Number,
    required:true,
   },
   type_of_apartment:{
    type:String,
    enum:["bunglow" , "flat"],
    required:true,
   },
   number_of_bhk:{
    type:Number,
    required:true,
   },
   sqft:{
    type :Number,
    required:true,
   },
   preferred_style :{
    type:String,
    enum:["Minimalist" , "Modern" , "Traditional"],
    required:true,
   },
    deadline:{
        type:Date,
        required:true,
    },
    include_furniture :{
        type:String,
        enum:["yes" , "no"],
    },
    requirements:{
      type: [String],
    },
    percent_completed:{
        type:Number,
        default:0,
    },
    status:{
        type:String,
        enum:["completed" , "in progress"],
    }
    
})

export default mongoose.model("Project" , ProjectModel);