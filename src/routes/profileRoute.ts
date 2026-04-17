import express from 'express';
import { createProfileController, getAllProfileControler, getProfileController } from "../controllers/profileController.js";
import { validateBody } from "../middleware/validation.js";

const router = express.Router();

router.post('/profiles', validateBody, createProfileController);
router.get('/profiles/:id', getProfileController);
router.get('/profiles', getAllProfileControler);

export default router;