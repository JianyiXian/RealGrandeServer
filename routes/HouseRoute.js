const express = require('express');
const { House, User, Enquiry } = require('../models/AllSchema');
const HouseRouter = express.Router();

HouseRouter.get('/', async (req, res) => {
    const houses = await House.find({});
    try {
        res.send(houses);
        console.log('send houses')
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = HouseRouter;