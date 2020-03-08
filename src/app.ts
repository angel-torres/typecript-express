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

const app = express();

app.use(express.json());

app.use(cors());

app.use('/recipes', recipesRoute);

app.set("port", process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
    try {
        res.send("<h1>Welcome to Recipes API</h1>");
    } catch (error) {
        
    }
});

export default app;