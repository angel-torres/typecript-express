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
UsersRoute.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Journal.find();
        res.send(posts);
    }
    catch (err) {
        res.send({ error: err });
    }
}));
UsersRoute.get('/:entryId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Journal.findById(req.params.entryId);
        res.send(post);
    }
    catch (err) {
        res.send({ error: err });
    }
}));
UsersRoute.delete('/:entryId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Journal.findByIdAndDelete(req.params.entryId);
        res.send(post);
    }
    catch (err) {
        res.send({ error: err });
    }
}));
UsersRoute.put('/:entryId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Journal.findByIdAndUpdate(req.params.entryId, req.body);
        res.send(post);
    }
    catch (err) {
        res.send({ error: err });
    }
}));
UsersRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const journalEntry = new Journal({
        title: req.body.title,
        body: req.body.body
    });
    try {
        const newEntry = yield journalEntry.save();
        res.send(newEntry);
    }
    catch (err) {
        res.send({ error: err });
    }
}));
exports.default = UsersRoute;
//# sourceMappingURL=users.js.map