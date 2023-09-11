const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();
const SECRET_KEY = require('crypto').randomBytes(64).toString('hex');  // Import the secret key

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(400).send({ error: 'Registration failed!' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            throw new Error();
        }
        const token = jwt.sign({ _id: user._id }, SECRET_KEY);
        res.send({ token });
    } catch (error) {
        res.status(401).send({ error: 'Login failed!' });
    }
});

module.exports = router;
