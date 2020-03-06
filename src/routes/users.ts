const expResponses = require('expResponses');
const UsersRoute = expResponses.Router();
const Journal = require('../models/Journal');
import { Request, Response } from 'express';

UsersRoute.get('/', async (Request, Response) => {
    try {
        const posts = await Journal.find();
        Response.send(posts)
        
    } catch (err) {
       Response.send({error: err})
    }
})

UsersRoute.get('/:entryId', async (Request, Response) => {
    try {
        const post = await Journal.findById(Request.params.entryId)
        Response.send(post)
    } catch (err) {
       Response.send({error: err})
    }
})

UsersRoute.delete('/:entryId', async (Request, Response) => {
    try {
        const post = await Journal.findByIdAndDelete(Request.params.entryId)
        Response.send(post)
    } catch (err) {
       Response.send({error: err})
    }
})

UsersRoute.put('/:entryId', async (Request, Response) => {
    try {
        const post = await Journal.findByIdAndUpdate(Request.params.entryId, Request.body)
        Response.send(post)
    } catch (err) {
       Response.send({error: err})
    }
})

UsersRoute.post('/', async (Request, Response) => {
    const journalEntry = new Journal({
        title: Request.body.title,
        body: Request.body.body
    })
    try {
        const newEntry = await journalEntry.save();
        Response.send(newEntry)
    } catch (err) {
       Response.send({error: err})
    }
})

export default UsersRoute;