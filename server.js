const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());

// connect to db
const DB_URI = process.env.ATLAS_URI;
mongoose.connect(DB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

// set routes

// start server
app.listen(PORT, () => console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`));