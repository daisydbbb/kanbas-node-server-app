import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const getAllQuizzes = async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.getAllQuizzes(cid);
    res.json(quizzes);
  };

  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };

  const deleteQuiz = async (req, res) => {
    const { quizzId } = req.params;
    const status = await dao.deleteQuiz(quizzId);
    res.json(status);
  };

  const updateQuiz = async (req, res) => {
    const { quizzId } = req.params;
    const status = await dao.updateQuiz(quizzId, req.body);
    res.json(status);
  };

  app.get("/api/courses/:cid/quizzes", getAllQuizzes);
  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.delete("/api/quizzes/:quizzId", deleteQuiz);
  app.put("/api/quizzes/:quizzId", updateQuiz);
}
