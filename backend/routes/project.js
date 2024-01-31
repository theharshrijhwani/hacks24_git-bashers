import express from "express";

import {
  deleteProject,
  getAllProjects,
  getProject,
  newProject,
  updateStatus,
  getCurrStatus,
} from "../controllers/project.js";

const router = express.Router();

router.post("/new", newProject);
router.delete("/:projectId", deleteProject);
router.get("/all", getAllProjects);
router.get("/get/:projectId", getProject);
router.put("/update/:projectID", updateStatus);
router.get("/update/status/:projectId", getCurrStatus);

export default router;
