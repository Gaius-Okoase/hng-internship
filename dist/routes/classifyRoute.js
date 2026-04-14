import express from 'express';
import { classifyController } from "../controllers/classifyController.js";
import { validateQuery } from "../middleware/validation.js";
const router = express.Router();
router.get('/classify', validateQuery, classifyController);
export default router;
//# sourceMappingURL=classifyRoute.js.map