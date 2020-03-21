import express = require("express");
import bcrypt = require('bcryptjs');
import { Request, Response } from "express";
const { User } = require('../models/Schemas');
import { authValidation } from "../middleware/authValidation";

const authRoute = express.Router();

authRoute.post('/signup',authValidation, async (request: Request, response: Response) => {
    const {username, password} = request.body;
    try {
        const user = await User.find({username: username});
        if (user.length > 0) {
            response.status(400).json({message: "Username already exists"});
        } else {
            const hash = await bcrypt.hash(password, 10);
            const newUser = {
                username: request.body.username,
                password: hash,
            }
            const userEntry = new User (newUser);
            const newEntry = await userEntry.save();
            response.status(200).json({user: "User created."});
        }
    } catch (error) {
        response.send({error})
    }
})

authRoute.post('/login', authValidation, async (request: Request, response: Response) => {
    const { username, password } = request.body;
    try {
        const [ user ] = await User.find({username: username});
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(isPasswordValid){
                response.status(200).json({message: "You are logged in!"})
            } else {
                response.status(400).json({message: "Invalid password."})
            }
        } else {
            response.status(400).json({message: "User not found."});
        }
    } catch (error) {
        response.send({error})
    }
});

export default authRoute;