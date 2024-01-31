import express from "express";

import {deleteProject, getAllProjects, getProject, newProject} from "../controllers/project.js";

const router = express.Router();

router.post("/new" , newProject);
router.delete("/:projectId" , deleteProject);
router.get("/all" , getAllProjects);
router.get("/:projectId" , getProject);

export default router