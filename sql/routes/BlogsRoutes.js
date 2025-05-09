const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All baneer
router.get('/blogs', (req, res) => {
    db.query('SELECT * FROM blogs', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a banner
router.post('/blogs', (req, res) => {
    const {  image, title, button_text,  button_link, created_at } = req.body;
    if (!image || !title || !button_text || !button_link || !created_at) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO blogs (bg_image, small_text, title, button_text,  button_link) VALUES (?, ?, ?, ?)';

    db.query(query, [ image, title, button_text, button_lin, created_atk], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId,  image, title, button_text, button_link, created_at });
    });
});

module.exports = router;