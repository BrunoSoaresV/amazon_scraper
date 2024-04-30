# Amazon Product Scraper

## Overview
This project is a simple web scraping application that fetches product listings from the first page of Amazon search results for a given keyword. It consists of both a backend API built with Node.js and an HTML/CSS/JavaScript frontend.

## Backend/API (Node.js)

### Setup
1. Install Node.js on your machine if you haven't already.
2. Clone or download this repository.
3. Navigate to the project directory in your terminal.
4. Install dependencies by running `npm install`.

### Running the Server
- To start the server, run `npm start`.
- By default, the server will run on port 3000. You can change the port by setting the `PORT` environment variable.

### Usage
- Make a GET request to `/api/scrape?keyword=yourKeyword` where `yourKeyword` is the product you want to search for on Amazon.
- The API will scrape the Amazon search results for the specified keyword and return the product information in JSON format.

## Frontend (HTML, CSS, JavaScript)

### Usage
1. Open the `index.html` file in your web browser.
2. Enter the keyword of the product you want to search for in the input field.
3. Click the "Search" button.
4. The results will be displayed below the input field.

## Folder Structure
- `server.js`: Contains the backend code for the API.
- `index.html`: HTML file for the frontend.
- `styles.css`: CSS file for styling the frontend.
- `script.js`: JavaScript file for frontend functionality.

## Dependencies
- `express`: Web framework for Node.js.
- `axios`: HTTP client for making requests.
- `jsdom`: Library for parsing and manipulating HTML documents.

## Notes
- Ensure you have a stable internet connection for the web scraping to work properly.
- The scraping process may take some time depending on the number of products and network speed.

