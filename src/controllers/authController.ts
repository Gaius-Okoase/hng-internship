import type { Request, Response, NextFunction } from "express";
import { getGitHubAuthUrlService, getProfileFromGitHubService } from "../services/authService.js";

export const getGitHubAuthUrlController = (_req: Request, res: Response, next: NextFunction) => {
    try {
        const {gitHubUri} = getGitHubAuthUrlService();
        console.log(gitHubUri)

        return res.redirect(gitHubUri)
    } catch (error) {
        next(error)
    }
}

export const getProfileFromGitHubController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const code = req.query.code as string;
        const state = req.query.state as string;

        const tokenResponse = await getProfileFromGitHubService(code, state)

        res.status(200).json(tokenResponse)
    } catch (error) {
        next(error);
    }
}
