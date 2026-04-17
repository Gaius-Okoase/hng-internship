import type { Request, Response, NextFunction } from "express";
import type { CreatedProfile } from "../types.js";
import { createProfileService, getProfileService } from "../services/profileService.js";

export const createProfileController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body as { name: string };
    
        const createdProfile: CreatedProfile = await createProfileService(name);
    
       res.status(201).json(createdProfile)
    } catch (error) {
        next(error)
    }
}

export const getProfileController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;

        const profile: CreatedProfile = await getProfileService(id);

        res.status(200).json({
            profile
        })
    } catch (error) {
        next(error)
    }
}