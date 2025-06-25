const express = require('express');
require('dotenv').config();
const route = express.Router();
const mongoose = require('mongoose');
const Food = require('../modules/food'); 



route.post('/addfood', async (req, res) => {
    try {
        const { RestaurantId, foodname, prix, img } = req.body;
        const food = new Food({
            RestaurantId,
            foodname,
            prix,
            img
        });
        await food.save();
        res.status(201).json({ message: 'Food added successfully', food });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

route.get('/all', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.get('/byrestaurant/:restaurantId', async (req, res) => {
    try {
        const foods = await Food.find({ RestaurantId: req.params.restaurantId });
        res.status(200).json(foods);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.get('/:id', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ error: 'Food not found' });
        }
        res.status(200).json(food);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.put('/:id', async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!food) {
            return res.status(404).json({ error: 'Food not found' });
        }
        res.status(200).json({ message: 'Food updated', food });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) {
            return res.status(404).json({ error: 'Food not found' });
        }
        res.status(200).json({ message: 'Food deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = route;
