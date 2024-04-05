import express from "express";
import {
  fetchRandomJokes,
  fetchRandomJokesApi,
  fetchRandomTenJokesApi,
  fetchRandomTenJokes,
  homePage,
} from "../controller/controller.js";

// Create an instance of express Router
export const route = express.Router();

// Define routes

// Route to render the home page
route.get("/", homePage);

// Route to fetch a random joke and send JSON data
route.get("/api/random", fetchRandomJokesApi);

// Route to fetch ten random jokes and render an EJS file
route.get("/random_ten", fetchRandomTenJokes);

// Route to fetch ten random jokes and send JSON data
route.get("/api/random_ten", fetchRandomTenJokesApi);

// Route to fetch a single random joke and send JSON data
route.get("/random", fetchRandomJokes);
