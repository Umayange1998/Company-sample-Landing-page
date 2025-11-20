const express = require("express");
const router = express.Router();
const News = require("../models/news");

// GET all News
router.get("/", async (req, res) => {
  try {
    const listOfNews = await News.find();
    res.json(listOfNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new News
router.post("/", async (req, res) => {
  try {
    const snews = await News.create(req.body);
    res.json(snews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
