import express from "express"; // Import the Express framework for building web applications
import bodyParser from "body-parser"; // Import middleware to parse JSON bodies
import dotenv from "dotenv"; // Import dotenv for loading environment variables
import { route } from './routes/routes.js'; // Import routes from a separate file

// Initialize an instance of the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Load environment variables from the .env file
dotenv.config();

// Set the view engine to EJS for rendering dynamic content
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('./public'));

// Define the port number for the server to listen on
export const PORT = process.env.PORT || 5005;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Attach routes to the express app
app.use(route);
