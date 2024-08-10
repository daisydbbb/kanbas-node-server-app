import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    number: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    startDate: String,
    endDate: String,
    department: String,
    credits: Number,
    description: String,
    enrolled: Boolean,
  },
  { collection: "courses" }
);
export default courseSchema;
