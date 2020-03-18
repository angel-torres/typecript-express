import { Request, Response } from "express";
export function authValidation(req: Request, res: Response, next: Function) {
    console.log(req.body);
    next();
};