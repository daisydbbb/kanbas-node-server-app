import model from "./model.js";

export const getAllQuizzes = (cid) => model.find({ course: cid });

export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
};

export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });

export const updateQuiz = (quizId, quiz) =>
  model.updateOne({ _id: quizId }, { $set: quiz });
