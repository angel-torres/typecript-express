import jwt = require('jsonwebtoken');
import { Request, Response } from 'express';

export function generateToken(username: string, userId: string) {
    const secret = process.env.SECRET;
    const payload = {
        username,
        userId
    }
    const token = jwt.sign(payload, secret);
    return token;
}

export function validateToken(request: Request, response: Response, next: Function) {
    const secret = process.env.SECRET;
    const token = jwt.sign({}, secret)
}
