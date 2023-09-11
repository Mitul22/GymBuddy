function recommendFitnessPlan(details) {
    if (details.goals === 'Lose Weight') {
        return {
            workout: 'Cardio and light strength training',
            diet: 'Low carb, high protein'
        };
    } else if (details.goals === 'Build Strength') {
        return {
            workout: 'Heavy weight lifting with rest days',
            diet: 'High protein and balanced carbs'
        };
    } else {  // Build Muscle
        return {
            workout: 'Strength training with muscle group splits',
            diet: 'High protein and calorie surplus'
        };
    }
}

module.exports = recommendFitnessPlan;
