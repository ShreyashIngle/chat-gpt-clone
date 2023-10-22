const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config()

const app = express()


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));


const PORT = process.env.PORT || 8080
app.listen(8080,() => {
    console.log(`Server is Running in ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
})