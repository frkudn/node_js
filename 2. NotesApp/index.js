import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { route } from "./routes/notesRoute.js";
// express app
const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database is successfully connected!");

    app.listen(PORT, () => {
      console.log(`Server is running on PORT : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(route);
