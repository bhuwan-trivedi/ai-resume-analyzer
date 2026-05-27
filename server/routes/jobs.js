const express = require("express");
const router = express.Router();

// TODO: Implement job routes
// POST / - Create job posting
// GET /:id - Get job details
// GET - List all jobs
// PUT /:id - Update job
// DELETE /:id - Delete job

router.post("/", (req, res) => {
  res.json({ message: "Create job endpoint" });
});

router.get("/", (req, res) => {
  res.json({ message: "Get all jobs endpoint" });
});

module.exports = router;
