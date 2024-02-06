const express = require("express");
const router = express.Router();

router.get("/upcoming", (req, res) => {
  res.json([{ id: 1, title: "Upcoming Movie", release_date: "2023-12-25" }]);
});

module.exports = router;
