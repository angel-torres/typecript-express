require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
import express = require('express');
import mongoose = require('mongoose');
import cookeParser = require('cookie-parser');
import { Request, Response } from 'express';

// ROUTES
import recipesRoute from './routes/recipesRoute';
import usersRoute from './routes/usersRoute';
import authRoute from './routes/auth';

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// INTIALIZING EXPRESS APP
const app = express();
app.use(cors());
const port: number =  parseInt(process.env.PORT) || 3000;
app.set("port", process.env.PORT || 3000);

// MIDDLEWARE
app.use(express.json());
app.use(cookeParser());
app.use(helmet());

// ROUTES
app.use('/recipes', recipesRoute);
app.use('/users', usersRoute);
app.use('/auth', authRoute);

app.get('/', (req: Request, res: Response) => {
    try {
        res.send("<h1>Welcome to Recipes API</h1>");
    } catch (error) {
        
    }
});

export default app;
