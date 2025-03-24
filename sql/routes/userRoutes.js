const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All User
router.get('/user', (req, res) => {
    db.query('SELECT * FROM User', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a User
router.post('/user', (req, res) => {
    const { first, last, email, password } = req.body;
	if (!first || !last || !email || !password) {
		return res.status(400).json({ error: "All fields are required" });
	}
    const query = 'INSERT INTO User ( first, last, email, password) VALUES (?, ?, ?, ?)';
	
    db.query(query, [ first, last, email, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, first, last, email });
    });
});

module.exports = router;

