const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/Assets", express.static("Assets"));

// Connect to MongoDB
const connectDB = require("./config/db"); // your mongoose connection file
connectDB();

// Routes
const newsRouter = require('./routes/News');
const testimonialRouter = require('./routes/Testimonial');

app.use("/news", newsRouter);
app.use("/testimonial", testimonialRouter);

// Config route
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
app.get('/api/config', (req, res) => {
    res.json({ googleMapsApiKey: GOOGLE_MAPS_API_KEY });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
