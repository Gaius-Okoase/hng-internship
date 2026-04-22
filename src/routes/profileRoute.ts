import express from 'express';
import { createProfileController, deleteProfileController, getAllProfileController, getProfileController } from "../controllers/profileController.js";
import { validateBody, validateQuery } from "../middleware/validation.js";

const router = express.Router();

router.post('/profiles', validateBody, createProfileController);
router.get('/profiles/:id', getProfileController);
router.get('/profiles', validateQuery, getAllProfileController);
router.delete('/profiles/:id', deleteProfileController);

export default router;