// Async function that sends a request to the server's API to scrape products
async function scrapeAmazon() {
    // Get the search keyword entered by the user
    const keyword = document.getElementById('keywordInput').value;
    // Define the port of the server where the API is running
    const serverPort = 3000; 
    // Send a request to the server's API with the search keyword as a query parameter
    const response = await fetch(`http://localhost:${serverPort}/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    // Parse the JSON response
    const data = await response.json();
    // Call the function to display the scraped results
    displayResults(data);
}

// Function to display the scraped products on the webpage
function displayResults(products) {
    // Get the HTML element where the results will be displayed
    const resultsDiv = document.getElementById('results');
    // Clear any existing content in the results div
    resultsDiv.innerHTML = '';

    // Iterate over each product in the scraped data
    products.forEach(product => {
        // Create a new div element to display each product
        const productDiv = document.createElement('div');
        // Set the inner HTML of the product div to display product details
        productDiv.innerHTML = `
            <h3>${product.title}</h3>
            <p>Rating: ${product.rating}</p>
            <p>Reviews: ${product.reviews}</p>
            <img src="${product.imageUrl}" alt="${product.title}" width="100">
            <hr>
        `;
        // Append the product div to the results div
        resultsDiv.appendChild(productDiv);
    });
}
