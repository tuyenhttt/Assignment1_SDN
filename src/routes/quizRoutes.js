const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

// GET all quizzes (with questions populated)
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate("questions");
    res.json(quizzes);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST a new quiz
router.post("/", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT update a quiz by ID
router.put("/:quizId", async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.quizId, req.body, {
      new: true,
    });
    res.json(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE a quiz by ID
router.delete("/:quizId", async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.quizId);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
