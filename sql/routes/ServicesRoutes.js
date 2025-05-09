const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All all_title
router.get('/services', (req, res) => {
    db.query('SELECT * FROM services', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a about
router.post('/services', (req, res) => {
    const { icon, title, description, button_text,  button_link } = req.body;
    if (!icon || !description || !title || !button_text || !button_link) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO services (icon, description, title,  button_text,  button_link) VALUES (?, ?, ?, ?)';

    db.query(query, [icon, description, title, button_text, button_link], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, icon, description, title, button_text, button_link });
    });
});

module.exports = router;