import { Request, Response } from "express";
export function authValidation(req: Request, res: Response, next: Function) {
    if(req.body.username && req.body.password) {
        console.log(req.body);
        next();
    } else {
        res.status(400).json({message: "Must provide username and password."});
    }
};