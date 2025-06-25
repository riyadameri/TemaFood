const mongoose = require('mongoose');

const costumerSchema = new mongoose.Schema({
    CostumerName: { type: String, required: true },
    Costumerlocation: { type: String, required: true },
    CostumerphoneNumber: { type: String, required: true },
});

module.exports = mongoose.model('costumer', costumerSchema);
