const express = require("express");
const router = express.Router();
const Testimonial = require("../models/testimonial");

// GET all Testimonials
router.get("/", async (req, res) => {
  try {
    const listOfTestimonials = await Testimonial.find();
    res.json(listOfTestimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new Testimonial
router.post("/", async (req, res) => {
  try {
    const sTestimonial = await Testimonial.create(req.body);
    res.json(sTestimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
