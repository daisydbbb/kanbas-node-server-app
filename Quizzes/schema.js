import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    title: String,
    course: { type: String, required: true },
    due: String,
    available_from: String,
    available_to: String,
    points: Number,
    score: Number,
    published: Boolean,
    time: Number,
    instructions: String,
    quiz_type: {
      type: String,
      enum: [
        "Graded Quiz",
        "Practice Quiz",
        "Graded Survey",
        "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    group: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffle: Boolean,
    multiple_attempts: Boolean,
    attempts: Number,
    one_question: Boolean,
    webcam: Boolean,
    lock_after_answer: Boolean,
    question_number: Number,
    access_code: String,
    lockdown_browser: Boolean,
    view_quiz: Boolean,
  },
  { collection: "quizzes" }
);
export default quizSchema;
