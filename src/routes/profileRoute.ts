import express from 'express';
import { createProfileController } from "../controllers/profileController.js";
import { validateQuery } from "../middleware/validation.js";

const router = express.Router();

router.post('/profiles', validateQuery, createProfileController);

export default router;