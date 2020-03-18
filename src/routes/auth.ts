import express = require("express");
import bcrypt = require('bcryptjs');
import { Request, Response } from "express";
const { User } = require('../models/Schemas');
import { authValidation } from "../middleware/authValidation";

const authRoute = express.Router();

authRoute.post('/signup',authValidation, async (req: Request, res: Response) => {
    const {username, password} = req.body;
    try {
        const user = await User.find({username: username});
        if (user.length > 0) {
            res.status(400).json({message: "Username already exists"});
        } else {
            const hash = await bcrypt.hash(password, 10);
            const newUser = {
                username: req.body.username,
                password: hash,
            }
            const userEntry = new User (newUser);
            const newEntry = await userEntry.save();
            res.status(200).json({user: "User created."});
        }
    } catch (err) {
        res.send({error: err})
    }
})

authRoute.post('/login', authValidation, async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const [ user ] = await User.find({username: username});
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(isPasswordValid){
                res.status(200).json({message: "You are logged in!"})
            } else {
                res.status(400).json({message: "Invalid password."})
            }
        } else {
            res.status(400).json({message: "User not found."});
        }
    } catch (err) {
        res.send({error: err})
    }
});

export default authRoute;