import type { Request, Response, NextFunction } from "express";
import type { AllUsers, CreatedProfile } from "../types.js";
import { createProfileService, deleteProfileService, getAllProfileService, getProfileService } from "../services/profileService.js";

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

        res.status(200).json(profile)
    } catch (error) {
        next(error)
    }
}

export const getAllProfileController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { gender, age_group, country_id } = req.query as { gender?: string, age_group?: string, country_id?: string};

        const allProfiles: AllUsers = await getAllProfileService(gender, age_group, country_id);

        res.status(200).json(allProfiles)
    } catch (error) {
        next(error)
    }
}

export const deleteProfileController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;

        await deleteProfileService(id);

        res.status(204).end();
    } catch (error) {
        next(error)
    }
}