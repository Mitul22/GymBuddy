const express = require('express');
const Details = require('../models/details');
const auth = require('../middleware/auth');
const recommendFitnessPlan = require('../utils/fitnessRecommend');  // We'll define this function next

const router = express.Router();

router.post('/details', auth, async (req, res) => {
    try {
        const details = new Details({
            ...req.body,
            userId: req.user._id
        });
        await details.save();
        res.status(201).send(details);
    } catch (error) {
        res.status(400).send({ error: 'Failed to save details.' });
    }
});

router.get('/recommend', auth, async (req, res) => {
    try {
        const userDetails = await Details.findOne({ userId: req.user._id });
        if (!userDetails) {
            return res.status(404).send({ error: 'User details not found.' });
        }
        const plan = recommendFitnessPlan(userDetails);
        res.send(plan);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch recommendation.' });
    }
});

module.exports = router;
