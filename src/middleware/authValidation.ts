import { Request, Response } from "express";
export function authValidation(request: Request, response: Response, next: Function) {
    if(request.body.username && request.body.password) {
        next();
    } else {
        response.status(400).json({message: "Must provide username and password."});
    }
};