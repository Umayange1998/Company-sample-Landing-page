const express = require('express');
const router = express.Router()
const{Testimonial} = require("../models");

router.get("/", async (req, res)=>{
const listOfTestimonial = await Testimonial.findAll()
res.json(listOfTestimonial);
})

router.post("/", async (req,res) =>{
    const sTestimonial = req.body;
    await Testimonial.create(sTestimonial);
    res.json(sTestimonial);
});


module.exports = router