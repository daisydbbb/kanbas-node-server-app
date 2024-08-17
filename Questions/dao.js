import model from "./model.js";

export const getAllQuestions = (quizId) => model.find({ quiz: quizId });

export const createQuestion = (question) => {
  delete question._id;
  return model.create(question);
};

export const deleteQuestion = (questionId) =>
  model.deleteOne({ _id: questionId });

export const updateQuestion = (questionId, question) =>
  model.updateOne({ _id: questionId }, { $set: question });
