const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    RestaurantId: { type: String, required: true },
    foodname: { type: String, required: true },
    prix: { type: String, required: true },
    status: { type: String, required: true },
    img: { type: String, required: true }
});

module.exports = mongoose.model('food', foodSchema);
