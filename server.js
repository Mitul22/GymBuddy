const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); 
const detailsRoutes = require('./routes/details');




const SECRET_KEY = require('crypto').randomBytes(64).toString('hex');  
const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.btwcixe.mongodb.net/?retryWrites=true&w=majority';
const app = express();

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

  
// Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use auth routes
app.use('/auth', authRoutes);
app.use('/details', detailsRoutes);
// TODO: Define routes and models here

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = 3000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});