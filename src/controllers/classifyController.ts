import type { Request, Response, NextFunction } from "express";
import type { FormattedRes } from "../types.js";
import { classifyService } from "../services/classifyService.js";

export const classifyController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const name = req.query.name as string;
    
        const formattedRes: FormattedRes = await classifyService(name);
    
       res.status(200).json(formattedRes)
    } catch (error) {
        next(error)
    }
}