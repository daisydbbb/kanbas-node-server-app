import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
  {
    course: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    lessions: Array,
  },
  { collection: "modules" }
);
export default moduleSchema;
