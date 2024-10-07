const express = require('express');
const connectDb = require('./config/database');
const app = express();
require('dotenv').config(); // Load environment variables
const quoteRoute = require('./route/selfquote');

// Connect to MongoDB
connectDb();

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/', quoteRoute);

// Set up the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
