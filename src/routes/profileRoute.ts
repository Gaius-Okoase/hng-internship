import express from 'express';
import { createProfileController, getProfileController } from "../controllers/profileController.js";
import { validateQuery } from "../middleware/validation.js";

const router = express.Router();

router.post('/profiles', validateQuery, createProfileController);
router.get('/profiles/:id', getProfileController);

export default router;