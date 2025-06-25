const express = require('express');
require('dotenv').config();
const route = express.Router();
const mongoose = require('mongoose');
const Costumer = require('../modules/costumer'); 

route.post('/costumer/signup', async (req, res) => {
    try {
        const { CostumerName, Costumerlocation, CostumerphoneNumber } = req.body;
        const existing = await Costumer.findOne({ CostumerName, CostumerphoneNumber });
        if (existing) {
            return res.status(400).json({ error: 'Customer already exists' });
        }
        const costumer = new Costumer({
            CostumerName,
            Costumerlocation,
            CostumerphoneNumber
        });
        await costumer.save();
        res.status(201).json({ message: 'Customer signed up successfully', costumer });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


route.post('/costumer/login', async (req, res) => {
    try {
        const { CostumerName, CostumerphoneNumber } = req.body;
        const costumer = await Costumer.findOne({ CostumerName, CostumerphoneNumber });
        if (!costumer) {
            return res.status(401).json({ error: 'Invalid customer name or phone number' });
        }
        res.status(200).json({ message: 'Login successful', costumer });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.get('/getAllcostumer', async (req, res) => {
    try {
        const customers = await Costumer.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.get('/costumer/:id', async (req, res) => {
    try {
        const customer = await Costumer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.put('/costumer/:id', async (req, res) => {
    try {
        const { CostumerName, Costumerlocation, CostumerphoneNumber } = req.body;
        const customer = await Costumer.findByIdAndUpdate(
            req.params.id,
            { CostumerName, Costumerlocation, CostumerphoneNumber },
            { new: true }
        );
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer updated successfully', customer });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

route.delete('/costumer/:id', async (req, res) => {
    try {
        const customer = await Costumer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = route;