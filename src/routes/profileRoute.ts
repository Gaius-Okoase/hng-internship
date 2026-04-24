import express from 'express';
import { createProfileController, deleteProfileController, getAllProfileController, getProfilesByNaturalQuerySearchController } from "../controllers/profileController.js";
import { validateBody, validateQuery } from "../middleware/validation.js";

const router = express.Router();

router.post('/profiles', validateBody, createProfileController);
//router.get('/profiles/:id', getProfileController);
router.get('/profiles', validateQuery, getAllProfileController);
router.delete('/profiles/:id', deleteProfileController);
router.get('/profiles/search', validateQuery, getProfilesByNaturalQuerySearchController);

export default router;