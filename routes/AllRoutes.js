const express = require('express');
const { Houses, Users, Enquiries } = require('../models/AllSchema');
// const Houses = require('../models/HouseSchema')
const AllRouter = express.Router();
const multer = require('multer');
let getFields = multer();


// To get all the houses info
AllRouter.get('/', async (req, res) => {
    const houses = await Houses.find({});
    try {
        res.send(houses);
        console.log('send houses')
    } catch (err) {
        res.status(500).send(err)
    }
})

// To create a new user
AllRouter.post('/signup', getFields.none(), async (req, res) => {
    try {
        // Get the new user from the request
        const newUser = new Users(req.body)

        // Save it in the database
        let user = await newUser.save();
        // Convert it to plain JavaScript object
        user = user.toObject();

        res.send(user);
    } catch (err) {
        res.status(500).send(err)
    }
})

// To log in
AllRouter.post('/login', getFields.none(), async (req, res) => {
    try {
        // Save it in the database
        let user = await Users.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            res.send(user);
        } else {
            res.send('Authentication Failed')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})

// To create a new enquiry
AllRouter.post('/register', getFields.none(), async (req, res) => {
    try {
        // Get the new user from the request
        const newEnquiry = new Enquiries(req.body)

        // Save it in the database
        let enquiry = await newEnquiry.save();

        // Convert it to plain JavaScript object
        enquiry = enquiry.toObject();

        res.send(enquiry);
    } catch (err) {
        res.status(500).send(err)
    }
})

// To get all enquiries
AllRouter.get('/allenquiry', async (req, res) => {
    const enquiries = await Enquiries.find({});
    try {
        res.send(enquiries);
        console.log('send enquiries')
    } catch (err) {
        res.status(500).send(err)
    }
})



module.exports = AllRouter;