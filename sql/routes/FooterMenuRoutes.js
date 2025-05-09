const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All About
router.get('/footer_menu', (req, res) => {
    db.query('SELECT * FROM footer_menu', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a about
router.post('/footer_menu', (req, res) => {
    const { name , link} = req.body;
    if (!name || !link) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO footer_menu (name,  link) VALUES (?, ?, ?, ?)';

    db.query(query, [name, link], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, name, link });
    });
});

module.exports = router;