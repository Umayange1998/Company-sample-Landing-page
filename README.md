🌐 Company Landing Page Website

This is a full-stack company landing page project built with:
🖥️ Frontend: HTML, CSS, JavaScript
⚙️ Backend: Node.js + Express.js + MySQL using Sequelize ORM

It dynamically displays Latest News and Client Testimonials stored in a database via RESTful APIs.

🚀 **Features**
🔹 **Frontend**

Fully responsive landing page built with Bootstrap 5

Dynamic Latest News and Testimonials sections fetched from backend

Swiper.js carousel for news section

Bootstrap Carousel for testimonials

Integrated Google Maps for company location

Hamburger side navigation for mobile devices

Back-to-top button appears after scrolling

Modern UI using Google Fonts and custom CSS styling

🔹 **Backend**

Built with Node.js and Express.js

Uses Sequelize ORM for MySQL database interaction

Provides RESTful API endpoints for:

/news → Manage company news

/testimonial → Manage client testimonials

CORS enabled for frontend-backend communication

Serves static assets (images) from the Assets/ folder

**Create .env file in server/**

GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=company_db
DB_DIALECT=mysql


🛠️ Technologies Used

Frontend: HTML, CSS, Bootstrap 5, Swiper.js

Backend: Node.js, Express.js

Database: MySQL, Sequelize ORM

HTTP Client: Axios

Other: dotenv, CORS
