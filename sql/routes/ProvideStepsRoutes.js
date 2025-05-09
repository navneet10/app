const express = require('express');
const router = express.Router();
const db = require('../server');

// Get All About
router.get('/provide_steps', (req, res) => {
    db.query('SELECT * FROM how_we_provide_steps', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Add a about
router.post('/provide_steps', (req, res) => {
    const { step_number, image, text  } = req.body;
    if (!step_number || !image || !text) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const query = 'INSERT INTO how_we_provide_steps (step_number, image, text) VALUES (?, ?, ?, ?)';

    db.query(query, [step_number, image, text], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: result.insertId, step_number, image, text });
    });
});

module.exports = router;