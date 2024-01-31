import express from "express";
import { newDesigner } from "../controllers/designer.js";

const router = express.Router();

router.post("/new", newDesigner);

export default router;
