const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All About
router.get('/about', (req, res) => {
    db.query('SELECT * FROM about', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a about
router.post('/about', (req, res) => {
    const { img1, img2, title, list, content, button_text,  button_link } = req.body;
    if (!img1 || !img2 || !title || !list || !content || !button_text || !button_link) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO about (img1, img2, title, list, content, button_text,  button_link) VALUES (?, ?, ?, ?)';

    db.query(query, [img1, img2, title, list, content, button_text, button_link], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, img1, img2, title, list, content, button_text, button_link });
    });
});

module.exports = router;