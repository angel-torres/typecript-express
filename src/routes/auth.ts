import express = require("express");
import bcrypt = require('bcryptjs');
import { Request, Response } from "express";
const { User } = require('../models/models');
import { authValidation } from "../middleware/authValidation";
import { generateToken } from "../middleware/tokenGenerator";

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
            const userEntry = new User(newUser);
            await userEntry.save();
            const token = generateToken(username, userEntry._id)
            response.status(200).cookie("token", token).json({message: "User created."}).send()
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
                const token = generateToken(username, user._id)
                response.status(200).cookie("token", token).send()
            } else {
                response.status(400).json({message: "Invalid password."})
            }
        } else {
            response.status(400).json({message: "User not found."});
        }
    } catch (error) {
        console.error(error);
        response.send({error})
    }
});

export default authRoute;