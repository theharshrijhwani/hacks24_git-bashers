import express from "express";

import { getAllUsers, singIn, singUp } from "../controllers/auth.js";

const router = express.Router();

router.post("/signin", singIn);
router.post("/signup", singUp);
router.get("/all" , getAllUsers);

export default router;
