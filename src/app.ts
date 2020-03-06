import express = require('express');
import { Request, Response } from 'express';

const app = express();

app.set("port", process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Hello world!</h1>");
});

export default app;