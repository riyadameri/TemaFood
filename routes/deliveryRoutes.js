const express = require('express');
require('dotenv').config();
const route = express.Router();
const mongoose = require('mongoose');
const Delivery = require('../modules/delivery');

route.post('/addDelivery', async (req, res) => {
    try {
        const Delivery = new Delivery(req.body);
        await Delivery.save();
        res.status(201).json({ message: 'Delivery added successfully', Delivery });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

route.get('/allDeliverys', async (req, res) => {
    try {
        const dilivries = await Delivery.find();
        res.status(200).json(dilivries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.get('/getDeliveryById/:id', async (req, res) => {
    try {
        const Delivery = await Delivery.findById(req.params.id);
        if (!Delivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }
        res.status(200).json(Delivery);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.put('/updateDeliveryById/:id', async (req, res) => {
    try {
        const Delivery = await Delivery.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!Delivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }
        res.status(200).json({ message: 'Delivery updated', Delivery });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const Delivery = await Delivery.findByIdAndDelete(req.params.id);
        if (!Delivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }
        res.status(200).json({ message: 'Delivery deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = route;

