import axios from "axios";
import { PORT } from "../server.js";

// Function to fetch a random joke from an external API and send it as JSON
export const fetchRandomJokesApi = async (req, res) => {
  try {
    // Define the external API endpoint for a random joke
    const endpoint = "https://official-joke-api.appspot.com/random_joke";

    // Send a GET request to the API endpoint and await the response
    const response = await axios.get(endpoint);

    // Send the response data (random joke) with a success status code
    res.status(200).send(response.data);
  } catch (error) {
    // If an error occurs, send the error message
    res.status(500).send(error.message);
  }
};

// Function to fetch a random joke from an external API and render it using EJS
export const fetchRandomJokes = async (req, res) => {
  try {
    // Define the external API endpoint for a random joke
    const endpoint = "https://official-joke-api.appspot.com/random_joke";

    // Send a GET request to the API endpoint and await the response
    const response = await axios.get(endpoint);

    // Extract setup, punchline, and type from the response data
    const setup = response.data["setup"];
    const punchline = response.data["punchline"];
    const type = response.data["type"];

    // Render the 'random_jokes' EJS template with the joke data
    res.render("random_jokes", {
      setup: setup,
      punchline: punchline,
      type: type,
    });
  } catch (error) {
    // If an error occurs, send the error message
    res.status(500).send(error.message);
  }
};

// Function to fetch ten random jokes from an external API and send them as JSON
export const fetchRandomTenJokesApi = async (req, res) => {
  try {
    // Define the external API endpoint for ten random jokes
    const endpoint = "https://official-joke-api.appspot.com/random_ten";

    // Send a GET request to the API endpoint and await the response
    const response = await axios.get(endpoint);

    // Send the response data (array of jokes) with a success status code
    res.status(200).send(response.data);
  } catch (error) {
    // If an error occurs, send the error message
    res.status(500).send(error.message);
  }
};

// Function to fetch ten random jokes from an external API and render them using EJS
export const fetchRandomTenJokes = async (req, res) => {
  try {
    // Define the external API endpoint for ten random jokes
    const endpoint = "https://official-joke-api.appspot.com/random_ten";

    // Send a GET request to the API endpoint and await the response
    const response = await axios.get(endpoint);

    // Extract the array of jokes from the response data
    const jokes = response.data;

    // Render the 'random_ten_jokes' EJS template with the jokes array
    res.render("random_ten_jokes", {
      jokes: jokes,
    });
  } catch (error) {
    // If an error occurs, send the error message
    res.status(500).send(error.message);
  }
};

// Function to render the home page with the server port number
export const homePage = async (req, res) => {
  try {
    // Render the 'home' EJS template with the server port number
    res.render("home", {
      PORT: PORT,
    });
  } catch (error) {
    // Handle any errors that occur during rendering
    res.status(500).send(error.message);
  }
};
