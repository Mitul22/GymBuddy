const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ageBracket: {
        type: String,
        required: true,
        enum: ['18-39', '40-60', '60+']
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    goals: {
        type: String,
        required: true,
        enum: ['Lose Weight', 'Build Strength', 'Build Muscle']
    }
});

module.exports = mongoose.model('Details', detailsSchema);
