const express = require('express');
const RecipesRoute = express.Router();
const { Recipe } = require('../models/Schemas');
import { Request, Response } from 'express';

RecipesRoute.get('/', async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find();
        res.send(recipes)
    } catch (err) {
       res.send({error: err})
    }
})

RecipesRoute.get('/:entryId', async (req: Request, res: Response) => {
    try {
        const recipe = await Recipe.findById(req.params.entryId)
        res.send(recipe)
    } catch (err) {
       res.send({error: err})
    }
})

RecipesRoute.delete('/:entryId', async (req: Request, res: Response) => {
    try {
        console.log("deleting recipe")
        const recipe = await Recipe.findByIdAndDelete(req.params.entryId)
        res.send(recipe)
    } catch (err) {
       res.send({error: err})
    }
})

RecipesRoute.put('/:entryId', async (req: Request, res: Response) => {
    try {
        await Recipe.findByIdAndUpdate(req.params.entryId, req.body)
        const updatedPost = await Recipe.findById(req.params.entryId)
        res.send(updatedPost)
    } catch (err) {
       res.send({error: err})
    }
})

RecipesRoute.post('/', async (req: Request, res: Response) => {
    try {
        const newRecipe: RecipeInterface = {
            title: req.body.title,
            username: req.body.username,
            description: req.body.description,
            ingredients: req.body.ingredients,
            steps: req.body.steps,
        }
        const recipeEntry = new Recipe(newRecipe);
        const newEntry = await recipeEntry.save();
        res.status(200).json(newEntry);
    } catch (err) {
        res.send({error: err})
    }
})

export default RecipesRoute;