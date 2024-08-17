import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
  {
    quiz: { type: String, required: true },
    type: {
      type: String,
      enum: ["TF", "MC", "FB"],
    },
    title: String,
    points: Number,
    description: String,
    options: Array,
    answer: String,
    answer_options: Array,
    student_answer: String,
    faculty_answer: String,
  },
  { collection: "questions" }
);
export default questionSchema;
