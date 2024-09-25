const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: { type: String, required: true },
  options: [String],
  keywords: [String],
  correctAnswerIndex: Number,
});

module.exports = mongoose.model("Question", questionSchema);
