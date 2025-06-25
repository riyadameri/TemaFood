const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    wilaya: { type: String, required: true },
    location: { type: String, required: true },
    phoneNumbers: [{ type: String, required: true }],
    adminName: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);