import { createProfileService } from "../services/profileService.js";
export const createProfileController = async (req, res, next) => {
    try {
        const { name } = req.body;
        const createdProfile = await createProfileService(name);
        res.status(201).json(createdProfile);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=profileController.js.map