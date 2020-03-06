require('dotenv').config();
import express = require('express');
import mongoose = require('mongoose');
import { Request, Response } from 'express';

// ROUTES
import Users from './routes/usersRoute';

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();

app.use('/users', Users);

app.use(express.json());

app.set("port", process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
    try {
        res.send("<h1>Hello world!</h1>");
    } catch (error) {
        
    }
});

export default app;