const express = require('express');
require('dotenv').config();
const route = express.Router();
const mongoose = require('mongoose');
const Restaurant = require('../modules/restaurant');
const Costumer = require('../modules/costumer'); 
const Food = require('../modules/food'); 


route.get('/getdata', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Restaurant API',
        status: 'success',
    });
}
);

route.post('/addrestaurant', async (req, res) => {
    try {
        const restaurant = new Restaurant({
            name: req.body.name,
            wilaya: req.body.wilaya,
            location: req.body.location,
            phoneNumbers: req.body.phoneNumbers,
            adminName: req.body.adminName,
            password: req.body.password,
            status: req.body.status
        });
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

route.get('/GetAll', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.get('/GetByWilaya/:wilaya', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ wilaya: req.params.wilaya });
        if (restaurants.length === 0) {
            return res.status(404).json({ error: 'No restaurants found in this wilaya' });
        }
        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.get('/GetById/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.put('/UpdateStatus/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const restaurant = await Restaurant.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

route.delete('/DeleteById/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json({ message: 'Restaurant deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
route.post('/login', async (req, res) => {
    try {
        const { adminName, password } = req.body;
        const restaurant = await Restaurant.findOne({ adminName });
        if (!restaurant) {
            return res.status(401).json({ error: 'Invalid admin name or password' });
        }
        if (restaurant.password !== password) {
            return res.status(401).json({ error: 'Invalid admin name or password' });
        }
        res.status(200).json({ message: 'Login successful', restaurant });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});





module.exports = route;