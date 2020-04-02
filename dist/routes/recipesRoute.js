"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const RecipesRoute = express.Router();
const { Recipe } = require('../models/models');
RecipesRoute.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield Recipe.find();
        response.send(recipes);
    }
    catch (error) {
        response.send({ error });
    }
}));
RecipesRoute.get('/:entryId', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield Recipe.findById(request.params.entryId);
        response.send(recipe);
    }
    catch (error) {
        response.send({ error });
    }
}));
RecipesRoute.delete('/:entryId', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield Recipe.findByIdAndDelete(request.params.entryId);
        response.send(recipe);
    }
    catch (error) {
        response.send({ error });
    }
}));
RecipesRoute.put('/:entryId', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Recipe.findByIdAndUpdate(request.params.entryId, request.body);
        const updatedPost = yield Recipe.findById(request.params.entryId);
        response.send(updatedPost);
    }
    catch (error) {
        response.send({ error });
    }
}));
RecipesRoute.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRecipe = {
            title: request.body.title,
            username: request.body.username,
            description: request.body.description,
            thumbnailURL: request.body.thumbnailURL,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions,
        };
        const recipeEntry = new Recipe(newRecipe);
        const newEntry = yield recipeEntry.save();
        response.status(200).json(newEntry);
    }
    catch (error) {
        response.send({ error });
    }
}));
exports.default = RecipesRoute;
//# sourceMappingURL=recipesRoute.js.map