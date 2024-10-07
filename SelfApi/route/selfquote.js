const express = require('express');
const router = express.Router(); // Initialize router

// Import controllers
const { getQuotes, addQuote } = require("../controllers/getQuote");

// Define routes
router.get("/getQuote", getQuotes); // GET route to fetch quotes
router.post("/addQuote", addQuote); // POST route to add a new quote*

// Export router
module.exports = router;
