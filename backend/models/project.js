import mongoose, { Schema } from "mongoose";

const ProjectModel = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  designer_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  project_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  type_of_apartment: {
    type: String,
    enum: ["Bunglow", "Flat"],
    required: true,
  },
  preferred_style: {
    type: String,
    enum: ["Minimalist", "Modern", "Traditional"],
    required: true,
  },
  deadline: {
    type: Number,
    required: true,
  },
  include_furniture: {
    type: String,
    enum: ["Yes", "No"],
  },
  requirements: {
    type: [String],
  },
  percent_completed: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["Completed", "In Progress"],
  },
  completed_requirements: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Project", ProjectModel);
