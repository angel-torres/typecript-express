const express = require('express');
const UsersRoute = express.Router();
const { User, Recipe } = require('../models/Schemas');
import { Request, Response } from 'express';

UsersRoute.get('/', async (request: Request, response: Response) => {
    try {
        const users = await User.find();
        response.send(users)
    } catch (error) {
       response.send({error})
    }
});

UsersRoute.get('/:username/recipes', async (request: Request, response: Response) => {
    try {
        const recipes = await Recipe.find({username: request.params.username});
        response.send(recipes)
    } catch (error) {
       response.send({error})
    }
});

UsersRoute.get('/:userId', async (request: Request, response: Response) => {
    try {
        const user = await User.findById(request.params.entryId)
        response.send(user)
    } catch (error) {
       response.send({error})
    }
});

UsersRoute.delete('/:userId', async (request: Request, response: Response) => {
    try {
        const user = await User.findByIdAndDelete(request.params.entryId)
        response.send(user)
    } catch (error) {
       response.send({error})
    }
});

// UsersRoute.put('/:userId', async (req: Request, res: Response) => {
//     try {
//         await User.findByIdAndUpdate(req.params.entryId, req.body)
//         const updatedUser = await User.findById(req.params.entryId)
//         res.send(updatedUser)
//     } catch (err) {
//        res.send({error: err})
//     }
// })

export default UsersRoute;