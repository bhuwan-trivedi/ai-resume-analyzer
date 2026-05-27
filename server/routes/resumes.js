const express = require("express");
const router = express.Router();

// TODO: Implement resume routes
// POST /upload - Upload resume
// GET /:id - Get resume details
// GET - List all resumes
// PUT /:id - Update resume
// DELETE /:id - Delete resume
// POST /:id/parse - Parse resume content

router.post("/upload", (req, res) => {
  res.json({ message: "Upload resume endpoint" });
});

router.get("/", (req, res) => {
  res.json({ message: "Get all resumes endpoint" });
});

module.exports = router;
