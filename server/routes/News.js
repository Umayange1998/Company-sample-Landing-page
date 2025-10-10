const express = require('express');
const router = express.Router()
const{News} = require("../models");

router.get("/", async (req, res)=>{
const listOfNews = await News.findAll()
res.json(listOfNews);
})

router.post("/", async (req,res) =>{
    const snews = req.body;
    await News.create(snews);
    res.json(snews);
});


module.exports = router