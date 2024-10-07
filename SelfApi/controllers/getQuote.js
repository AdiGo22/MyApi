const Quote = require("../model/Quote");

// Get all quotes
exports.getQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find(); // Fetch all quotes from MongoDB
        res.status(200).json({
            success: true,
            data: quotes,
            message: 'Quotes fetched successfully!'
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving quotes',
            error: e.message
        });
    }
};

// Add a new quote
exports.addQuote = async (req, res) => {
    try {
        const { quote, author } = req.body; // Extract quote and author from request body
        const newQuote = await Quote.create({ quote, author }); // Save the new quote to DB
        res.status(201).json({
            success: true,
            data: newQuote,
            message: 'Quote added successfully!'
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Error adding the quote',
            error: e.message
        });
    }
};
