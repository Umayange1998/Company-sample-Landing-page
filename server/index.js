const express = require('express');
const app = express();
app.use(express.json()); 
const cors = require('cors');
app.use(cors());
app.use("/Assets", express.static("Assets"));
require('dotenv').config();


const db = require("./models");
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY; 
app.get('/api/config', (req, res) => {
    res.json({ 
        googleMapsApiKey: GOOGLE_MAPS_API_KEY 
    });
});
//Routes

const newsRouter = require('./routes/News')
app.use("/news",newsRouter);

const testimonialRouter = require('./routes/Testimonial')
app.use("/testimonial",testimonialRouter);



db.sequelize.sync().then(()=>{
app.listen(3001,()=>{
    console.log("Server is running on port 3001")
});
})

