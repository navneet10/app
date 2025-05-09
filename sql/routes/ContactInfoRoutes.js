const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All contact_info  Items
router.get('/contact_info', (req, res) => {
    db.query('SELECT * FROM contact_info', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a contact_info Item
router.post('/contact_info', (req, res) => {
    const { email, phone, address } = req.body;
    if (!email || !phone || !address) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO contact_info (name, description, price) VALUES (?, ?, ?)';

    db.query(query, [email, phone, address], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, email, phone, address });
    });
});

module.exports = router;
