const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const moviesRoutes = require("./routes/movieRoutes");
const authRoutes = require("./routes/authRoutes");
const triviaRoutes = require("./routes/triviaRoutes");

app.use(express.json());

app.use("/movies", moviesRoutes);
app.use("/auth", authRoutes);
app.use("/trivia", triviaRoutes);

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("Disney Trivia API is running!");
});

module.exports = app;
