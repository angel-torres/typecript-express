require('dotenv').config();
import express = require('express');
import mongoose = require('mongoose');
import { Request, Response } from 'express';

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set("port", process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Hello world!</h1>");
});

export default app;