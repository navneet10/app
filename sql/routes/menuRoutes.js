const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All Menu Items
router.get('/menu', (req, res) => {
    db.query('SELECT * FROM Menu', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a Menu Item
router.post('/menu', (req, res) => {
    const { name, link, index } = req.body;
    if (!name || !link || !index) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO menu_items (name, description, price) VALUES (?, ?, ?)';

    db.query(query, [name, link, index], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, name, link, index });
    });
});

module.exports = router;
