import db from "../Database/index.js";

export default function QuestionRoutes(app) {
  app.get("/api/courses/:cid/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const questions = db.questions.filter((q) => q.quiz === qid);
    res.json(questions);
  });

  app.post("/api/courses/:cid/quizzes/:qid", (req, res) => {
    const { cid, qid } = req.params;
    const newQuestion = {
      ...req.body,
      course: cid,
      quiz: qid,
      _id: new Date().getTime().toString(),
    };
    db.questions.push(newQuestion);
    res.send(newQuestion);
  });

  app.delete("/api/questions/:qid", (req, res) => {
    const { qid } = req.params;
    db.questions = db.questions.filter((q) => q._id !== qid);
    res.sendStatus(200);
  });

  app.put("/api/questions/:qid", (req, res) => {
    const { qid } = req.params;
    const questionIndex = db.questions.findIndex((q) => q._id === qid);
    db.questions[questionIndex] = {
      ...db.questions[questionIndex],
      ...req.body,
    };
    res.sendStatus(204);
  });
}
