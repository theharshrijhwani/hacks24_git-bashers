import mongoose, { Schema } from "mongoose";

const teamModel= new Schema({
    designer_id: {
        
    },
    name:{
        type:String,
        required:true,
    },
    specialization:{
        type:String,
        enum:["Flooe" , "Ceiling" , "Kitchen" , "restrooms" , "bedroom"],
        required:true,
    },
})

export default mongoose.model("Team" , teamModel);