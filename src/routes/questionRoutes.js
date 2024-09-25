const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// GET all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST a new question
router.post("/", async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT update a question by ID
router.put("/:questionId", async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.questionId,
      req.body,
      { new: true }
    );
    res.json(question);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE a question by ID
router.delete("/:questionId", async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.questionId);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
