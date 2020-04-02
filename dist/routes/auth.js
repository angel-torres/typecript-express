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
const express = require("express");
const bcrypt = require("bcryptjs");
const { User } = require('../models/models');
const authValidation_1 = require("../middleware/authValidation");
const tokenGenerator_1 = require("../middleware/tokenGenerator");
const authRoute = express.Router();
authRoute.post('/signup', authValidation_1.authValidation, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = request.body;
    try {
        const user = yield User.find({ username: username });
        if (user.length > 0) {
            response.status(400).json({ message: "Username already exists" });
        }
        else {
            const hash = yield bcrypt.hash(password, 10);
            const newUser = {
                username: request.body.username,
                password: hash,
            };
            const userEntry = new User(newUser);
            yield userEntry.save();
            const token = tokenGenerator_1.generateToken(username, userEntry._id);
            response.status(200).cookie("token", token).json({ message: "User created." }).send();
        }
    }
    catch (error) {
        response.send({ error });
    }
}));
authRoute.post('/login', authValidation_1.authValidation, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = request.body;
    try {
        const [user] = yield User.find({ username: username });
        if (user) {
            const isPasswordValid = yield bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const token = tokenGenerator_1.generateToken(username, user._id);
                response.status(200).cookie("token", token).send();
            }
            else {
                response.status(400).json({ message: "Invalid password." });
            }
        }
        else {
            response.status(400).json({ message: "User not found." });
        }
    }
    catch (error) {
        console.error(error);
        response.send({ error });
    }
}));
exports.default = authRoute;
//# sourceMappingURL=auth.js.map