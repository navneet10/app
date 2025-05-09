const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All About
router.get('/footer', (req, res) => {
    db.query('SELECT * FROM footer', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a about
router.post('/footer', (req, res) => {
    const { title, subscribe_text, logo, copyright_text } = req.body;
    if (!title || !subscribe_text || !logo || !copyright_text) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO footer (  title, subscribe_text, 	logo, button_text,  button_link) VALUES (?, ?, ?, ?)';

    db.query(query, [title, subscribe_text, logo, copyright_text], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, title, subscribe_text, logo, copyright_text });
    });
});

module.exports = router;