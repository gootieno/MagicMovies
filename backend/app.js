const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const moviesRoutes = require("./routes/moviesRoutes");
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
