import mongoose, { Schema } from "mongoose";

const DesignerModel = new Schema({
  designer_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  portfolio_website: {
    type: String,
  },
  expertise: {
    type: [String],
  },
  experience: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Designer", DesignerModel);
