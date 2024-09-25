// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/SimpleQuiz", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Routes
// const quizRoutes = require("./routes/quizRoutes");
// const questionRoutes = require("./routes/questionRoutes");

// app.get("/", (req, res) => {
//   res.send("Sample Quizzes");
// });
// app.use("/quizzes", quizRoutes);
// app.use("/questions", questionRoutes);

// // Start server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running at port http://localhost:${port}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB using MONGO_URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");

app.get("/", (req, res) => {
  res.send("Sample Quizzes");
});
app.use("/quizzes", quizRoutes);
app.use("/questions", questionRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
