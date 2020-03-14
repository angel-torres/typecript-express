const express = require('express');
const UsersRoute = express.Router();
const { User, Recipe } = require('../models/Schemas');
import { Request, Response } from 'express';

// TYPES

UsersRoute.get('/', async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.send(users)
        
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.get('/:username/recipes', async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find({username: req.params.username});
        res.send(recipes)
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.get('/:userId', async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.entryId)
        res.send(user)
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.delete('/:userId', async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.entryId)
        res.send(user)
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.put('/:userId', async (req: Request, res: Response) => {
    try {
        await User.findByIdAndUpdate(req.params.entryId, req.body)
        const updatedUser = await User.findById(req.params.entryId)
        res.send(updatedUser)
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.post('/', async (req: Request, res: Response) => {
    try {

        const newUser = {
            username: req.body.username,
        }

        const userEntry = new User (newUser);
        const newEntry = await userEntry.save();
        res.status(200).json(newEntry);
    } catch (err) {
        // console.log("logging error in post endpoint - ", err);
        res.send({error: err})
    }
})

export default UsersRoute;