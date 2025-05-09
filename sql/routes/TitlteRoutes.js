const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All all_title
router.get('/all_title', (req, res) => {
    db.query('SELECT * FROM all_title', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a about
router.post('/all_title', (req, res) => {
    const { bg_image, small_text, title, button_text,  button_link } = req.body;
    if (!bg_image || !small_text || !title || !button_text || !button_link) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO all_title (bg_image, small_text, title,  button_text,  button_link) VALUES (?, ?, ?, ?)';

    db.query(query, [bg_image, small_text, title, button_text, button_link], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, bg_image, small_text, title, button_text, button_link });
    });
});

module.exports = router;