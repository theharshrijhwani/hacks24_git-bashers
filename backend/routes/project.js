import express from "express";

import {
  deleteProject,
  getAllProjects,
  getProject,
  newProject,
  updateStatus,
} from "../controllers/project.js";

const router = express.Router();

router.post("/new", newProject);
router.delete("/:projectId", deleteProject);
router.get("/all", getAllProjects);
router.get("/:projectId", getProject);
router.put("/update", updateStatus);

export default router;
