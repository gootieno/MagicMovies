// src/routes/moviesRoutes.js
const express = require("express");
const router = express.Router();

// Example route for getting upcoming movies
router.get("/upcoming", (req, res) => {
  // Logic to fetch and return upcoming movies
  res.json([{ id: 1, title: "Upcoming Movie", release_date: "2023-12-25" }]);
});

module.exports = router;
