import mongoose, { Schema } from "mongoose";

const DesignerModel = new Schema({
   rating :{
    type:Number,
    default:null,
   },
   portfolio_Website :{
     type: String,
     
   },
   expertise :{
    type : [String],
   },
   experience :{
    type:Number,
    required:true,
   }

})

export default mongoose.model("Designer" , DesignerModel);