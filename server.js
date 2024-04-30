// Import necessary modules and libraries
const express = require('express'); // Express framework for Node.js
const axios = require('axios'); // Axios for making HTTP requests
const { JSDOM } = require('jsdom'); // JSDOM for parsing HTML

// Create an instance of Express application
const app = express();
// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Define a route to handle GET requests to '/api/scrape'
app.get('/api/scrape', async (req, res) => {
    try {
        // Extract the keyword from the query parameters of the request
        const keyword = req.query.keyword;
        // Construct the Amazon search URL using the keyword
        const amazonUrl = `https://www.amazon.com/s?k=${keyword}`;
        // Send a GET request to the Amazon URL using Axios
        const response = await axios.get(amazonUrl);
        // Parse the HTML response using JSDOM
        const dom = new JSDOM(response.data);

        // Initialize an array to store product information
        const products = [];

        // Loop through each product element in the HTML document
        dom.window.document.querySelectorAll('.s-result-item').forEach((item) => {
            // Extract product details such as title, rating, reviews, and image URL
            const title = item.querySelector('h2').textContent.trim();
            const rating = item.querySelector('.a-icon-star-small')?.textContent.trim() || 'N/A';
            const reviews = item.querySelector('.a-size-small')?.textContent.trim() || 'N/A';
            const imageUrl = item.querySelector('img')?.getAttribute('src') || 'N/A';

            // Push the extracted product information into the products array
            products.push({ title, rating, reviews, imageUrl });
        });

        // Send the extracted product information as JSON response
        res.json(products);
    } catch (error) {
        // Handle errors by logging them and sending an error response
        console.error('Error scraping Amazon:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server and listen for incoming requests on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
