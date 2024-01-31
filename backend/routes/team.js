import express from "express";
import { createTeamMember } from "../controllers/team.js";

const router = express.Router();

router.post("/new", createTeamMember);

export default router;
