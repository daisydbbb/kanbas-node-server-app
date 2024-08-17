import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const getAllQuestions = async (req, res) => {
    const { qid } = req.params;
    const questions = await dao.getAllQuestions(qid);
    res.json(questions);
  };

  const createQuestion = async (req, res) => {
    const question = await dao.createQuestion(req.body);
    res.json(question);
  };

  const deleteQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.deleteQuestion(questionId);
    res.json(status);
  };

  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.updateQuestion(questionId, req.body);
    res.json(status);
  };

  app.get("/api/courses/:cid/quizzes/:qid", getAllQuestions);
  app.post("/api/courses/:cid/quizzes/:qid", createQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);
  app.put("/api/questions/:questionId", updateQuestion);
}
