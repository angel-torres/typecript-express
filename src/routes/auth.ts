import express = require("express");
import bcrypt = require('bcryptjs');
import { Request, Response } from "express";
const { User } = require('../models/Schemas');

const authRoute = express.Router();

authRoute.post('/signup', async (req: Request, res: Response) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync("B4c0/\/", salt);
        const newUser = {
            username: req.body.username,
            password: hash,
        }
        const userEntry = new User (newUser);
        const newEntry = await userEntry.save();
        res.status(200).json(newEntry);
    } catch (err) {
        res.send({error: err})
    }
})

authRoute.post('/login', (req: Request, res: Response) => {
    console.log("We are logging in!!");
    res.send("<h1>Logging in!!</h1>");
});

export default authRoute;