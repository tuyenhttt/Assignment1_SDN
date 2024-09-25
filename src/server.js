const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/SimpleQuiz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");

app.get("/", (req, res) => {
  res.send("Sample Quizzes");
});
app.use("/quizzes", quizRoutes);
app.use("/questions", questionRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
