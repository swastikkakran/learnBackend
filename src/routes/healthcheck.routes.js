import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";
import { testRoute } from "../controllers/healthcheck.controllers.js";
const router = Router()

router.route("/").get(healthCheck)
router.route("/test").get(testRoute)
export default router