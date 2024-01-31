import express from "express";

import {deleteProject, getAllProjects, newProject} from "../controllers/project.js";

const router = express.Router();

router.post("/new" , newProject);
router.delete("/:projectId" , deleteProject);
router.get("/all" , getAllProjects);

export default router