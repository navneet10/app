const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Test route
app.get('/', (req, res) => {
    res.send('API is running....');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = db;

const aboutRoutes = require('./routes/AboutRoutes');
const menuRoutes = require('./routes/menuRoutes');
const bannerRoutes = require('./routes/BannerRoutes');
const blogsRoutes = require('./routes/BlogsRoutes');
const contactInfoRoutes = require('./routes/ContactInfoRoutes');
const titlteRoutes = require('./routes/TitlteRoutes');
const footerRoutes = require('./routes/FooterRoutes');
const footerMenuRoutes = require('./routes/FooterMenuRoutes');
const provideStepsRoutes = require('./routes/ProvideStepsRoutes');
const servicesRoutes = require('./routes/ServicesRoutes');
app.use('/link', aboutRoutes);
app.use('/link', menuRoutes);
app.use('/link', bannerRoutes);
app.use('/link', blogsRoutes);
app.use('/link', contactInfoRoutes);
app.use('/link', titlteRoutes);
app.use('/link', footerRoutes);
app.use('/link', footerMenuRoutes);
app.use('/link', provideStepsRoutes);
app.use('/link', servicesRoutes);