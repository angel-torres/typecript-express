import { Request, Response } from "express";
export function authValidation(request: Request, response: Response, next: Function) {
    const { username, password } = request.body;
    if( username && password ) {
        next();
    } else {
        response
        .status(400)
        .json({message: "Must provide username and password."});
    }
};