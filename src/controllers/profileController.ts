import type { Request, Response, NextFunction } from "express";
import type { CreatedProfile } from "../types.js";
import { createProfileService } from "../services/profileService.js";

export const createProfileController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body as { name: string };
    
        const createdProfile: CreatedProfile = await createProfileService(name);
    
       res.status(201).json(createdProfile)
    } catch (error) {
        next(error)
    }
}