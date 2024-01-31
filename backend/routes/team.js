import express from "express";
import { createTeamMember } from "../controllers/team";

const router = express.Router();

router.post("/new" , createTeamMember);

export default router;