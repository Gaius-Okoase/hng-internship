import { Router } from "express";
import { getProfileFromGitHubController, getGitHubAuthUrlController } from "../controllers/authController.js";

const router = Router();

router.get('/github', getGitHubAuthUrlController);
router.get('/github/callback', getProfileFromGitHubController);

export default router;