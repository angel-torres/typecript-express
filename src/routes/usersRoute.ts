const express = require('express');
const UsersRoute = express.Router();
const Users = require('../models/usersModel');
import { Request, Response } from 'express';

UsersRoute.get('/', async (req: Request, res: Response) => {
    try {
        const posts = await Users.find();
        res.send(posts)
        
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.get('/:entryId', async (req: Request, res: Response) => {
    try {
        const post = await Users.findById(req.params.entryId)
        res.send(post)
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.delete('/:entryId', async (req: Request, res: Response) => {
    try {
        const post = await Users.findByIdAndDelete(req.params.entryId)
        res.send(post)
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.put('/:entryId', async (req: Request, res: Response) => {
    try {
        const post = await Users.findByIdAndUpdate(req.params.entryId, req.body)
        res.send(post)
    } catch (err) {
       res.send({error: err})
    }
})

UsersRoute.post('/', async (req: Request, res: Response) => {
    const journalEntry = new Users({
        title: req.body.title,
        body: req.body.body
    })
    try {
        const newEntry = await journalEntry.save();
        res.send(newEntry)
    } catch (err) {
       res.send({error: err})
    }
})

export default UsersRoute;