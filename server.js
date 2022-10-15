import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
//import cors from "cors";

//route imports
import itemRouter from "./routes/itemsRoute.js";

//Loads .env file contents into process.env.
dotenv.config();

const app = express();
app.use(express.json());

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Database connection established");
    })
    .catch((error) => {
        console.log("an error occurred while connecting ot the db", error);
    });

    app.use("/items", itemRouter)

app.listen(3001, () => console.log("The server has started on port 3001"));
