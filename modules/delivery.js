const mongoose = require('mongoose');

const dilivrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    wilaya: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Dilivry', dilivrySchema);