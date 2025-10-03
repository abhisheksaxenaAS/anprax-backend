import { Router } from "express";
import { getAllRequests } from "../controllers/admin.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = Router();

// Only admin can access
router.get("/requests", protectAdmin, getAllRequests);

export default router;
