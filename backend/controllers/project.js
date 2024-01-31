import Project from "../models/project.js";

export const newProject = async (req, res) => {
  const {
    user_id,
    project_name,
    address,
    budget,
    type_of_apartment,
    preferred_style,
    deadline,
    include_furniture,
    requirements,
  } = req.body;

  let project = await Project.findOne({ project_name });

  if (project) return "project already exist";

  project = await Project.create({
    user_id,
    project_name,
    address,
    budget,
    type_of_apartment,
    preferred_style,
    deadline,
    include_furniture,
    requirements,
  });
  res.json({
    sucess: true,
    project,
  });
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  let project = await Project.findOne({ id });

  if (!project) return "Project doesn't exist";

  project = await Project.deleteOne({ id });

  return res.json({ message: "success" });
};

export const getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json({
    sucess: true,
    projects,
  });
};
