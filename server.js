const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
app.use(cors());
require('./config/connect');
app.use(express.json());

// api 
app.use('/api/restaurants', require('./routes/restaurantRoutes'));
app.use('/api/dilivry', require('./routes/deliveryRoutes'));
app.use('/api/costumer', require('./routes/coustumerRoutes'));
app.use('/api/food', require('./routes/foodRoutes'));




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);