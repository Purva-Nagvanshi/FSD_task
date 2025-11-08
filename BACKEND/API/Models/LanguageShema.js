import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  scope: {
    type: [String], 
    required: true,
  },
}, { timestamps: true });

 const Tech = mongoose.model("Languages", techSchema);
 export{Tech}
