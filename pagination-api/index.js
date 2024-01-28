import express from "express";
import { config } from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";
import productsRoute from "./routes/products.js";

const app = express();
app.use(cors());
config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Mongo ON');
    } catch (error) {
        throw (error);
    }
};

// middlewares
app.use(express.json());
app.use('/api/products', productsRoute);


app.listen(process.env.PORT, () => {
    console.log('Server ON');
    connect();
});