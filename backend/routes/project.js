import express from "express";

import {deleteProject, newProject} from "../controllers/project.js";

const router = express.Router();

router.post("/new" , newProject);
router.delete("/:projectId" , deleteProject);

export default router