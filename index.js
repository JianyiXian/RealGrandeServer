const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const AllRouter = require('./routes/AllRoutes');

const uri = "mongodb+srv://cluster0.husqbdo.mongodb.net/realgrande?retryWrites=true&w=majority";


const db = module.exports = () => {
    try {
        mongoose.connect(uri, {
            user: process.env.DBUSERNAME,
            pass: process.env.DBPASSWORD,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('mongo connection success');
    } catch (err) {
        console.log(err);
        console.log('mongodb connection failed')
    }
}
db();


app.use('/', (req, res, next) => {
    console.log('a new request received');
    next();
})

app.use('/', AllRouter);


app.listen(process.env.PORT, () => {
    console.log(`app listening at localhost${process.env.PORT}`)
})