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
const UsersRoute = express.Router();
const { User, Recipe } = require('../models/models');
UsersRoute.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.find();
        response.send(users);
    }
    catch (error) {
        response.send({ error });
    }
}));
UsersRoute.get('/:username/recipes', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield Recipe.find({ username: request.params.username });
        response.send(recipes);
    }
    catch (error) {
        response.send({ error });
    }
}));
UsersRoute.get('/:userId', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findById(request.params.entryId);
        response.send(user);
    }
    catch (error) {
        response.send({ error });
    }
}));
UsersRoute.delete('/:userId', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findByIdAndDelete(request.params.entryId);
        response.send(user);
    }
    catch (error) {
        response.send({ error });
    }
}));
// UsersRoute.put('/:userId', async (req: Request, res: Response) => {
//     try {
//         await User.findByIdAndUpdate(req.params.entryId, req.body)
//         const updatedUser = await User.findById(req.params.entryId)
//         res.send(updatedUser)
//     } catch (err) {
//        res.send({error: err})
//     }
// })
exports.default = UsersRoute;
//# sourceMappingURL=usersRoute.js.map