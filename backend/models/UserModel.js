import mongoose, { Schema } from "mongoose";

const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    enum: ["designer", "client"], 
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("User", userModel);
