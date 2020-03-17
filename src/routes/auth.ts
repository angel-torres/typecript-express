import express = require("express");
import { Request, Response } from "express";

const authRoute = express.Router();

authRoute.post('/signup', (req: Request, res: Response) => {
    console.log("We are getting authenticated");
    res.send("<h1>Getting authenticated!!</h1>");
});

authRoute.post('/login', (req: Request, res: Response) => {
    console.log("We are logging in!!");
    res.send("<h1>Logging in!!</h1>");
});

export default authRoute;