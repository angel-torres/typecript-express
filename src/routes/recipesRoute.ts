const express = require('express');
const RecipesRoute = express.Router();
const { Recipe } = require('../models/Schemas');
import { Request, Response } from 'express';

RecipesRoute.get('/', async (request: Request, response: Response) => {
    try {
        const recipes = await Recipe.find();
        response.send(recipes)
    } catch (err) {
       response.send({error: err})
    }
})

RecipesRoute.get('/:entryId', async (request: Request, response: Response) => {
    try {
        const recipe = await Recipe.findById(request.params.entryId)
        response.send(recipe)
    } catch (err) {
       response.send({error: err})
    }
})

RecipesRoute.delete('/:entryId', async (request: Request, response: Response) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(request.params.entryId)
        response.send(recipe)
    } catch (err) {
       response.send({error: err})
    }
})

RecipesRoute.put('/:entryId', async (request: Request, response: Response) => {
    try {
        await Recipe.findByIdAndUpdate(request.params.entryId, request.body)
        const updatedPost = await Recipe.findById(request.params.entryId)
        response.send(updatedPost)
    } catch (err) {
       response.send({error: err})
    }
})

RecipesRoute.post('/', async (request: Request, response: Response) => {
    try {
        const newRecipe: RecipeInterface = {
            title: request.body.title,
            username: request.body.username,
            description: request.body.description,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions,
        }
        const recipeEntry = new Recipe(newRecipe);
        const newEntry = await recipeEntry.save();
        response.status(200).json(newEntry);
    } catch (err) {
        response.send({error: err})
    }
})

export default RecipesRoute;