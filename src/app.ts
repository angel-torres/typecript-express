require('dotenv').config();
const cors = require('cors');
import express = require('express');
import mongoose = require('mongoose');
import { Request, Response } from 'express';

// ROUTES
import recipesRoute from './routes/recipesRoute';

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// INTIALIZING EXPRESS APP
const app = express();
const port: number =  parseInt(process.env.PORT) || 3000;
app.set("port", process.env.PORT || 3000);

// MIDDLEWARE
app.use(express.json());
app.use(cors());


// ROUTES
app.use('/recipes', recipesRoute);


app.get('/', (req: Request, res: Response) => {
    try {
        res.send("<h1>Welcome to Recipes API</h1>");
    } catch (error) {
        
    }
});

export default app;