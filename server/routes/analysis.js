const express = require("express");
const router = express.Router();

// TODO: Implement analysis routes
// POST /match - Match resume to job
// POST /score - Score resume
// GET /:id - Get analysis results

router.post("/match", (req, res) => {
  res.json({ message: "Match resume to job endpoint" });
});

router.post("/score", (req, res) => {
  res.json({ message: "Score resume endpoint" });
});

module.exports = router;
