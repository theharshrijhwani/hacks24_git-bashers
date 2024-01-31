import Project from "../models/project.js";

export const newProject = async (req, res) => {
  const {
    project_name,
    address,
    budget,
    type_of_apartment,
    preferred_style,
    deadline,
    include_furniture,
    requirements,
    completed_requirements,
  } = req.body;

  let project = await Project.findOne({ project_name });

  if (project) return "project already exist";

  project = await Project.create({
    project_name,
    address,
    budget,
    type_of_apartment,
    preferred_style,
    deadline,
    include_furniture,
    requirements,
    completed_requirements,
  });
  res.json({
    sucess: true,
    project,
  });
};

export const deleteProject = async (req, res) => {
  const { project_name } = req.params;

  let project = await Project.findOne({ projectId });

  if (!project) return "project doesnot exist";

  project = await Project.deleteOne({ project_name });
};

export const getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json({
    sucess: true,
    projects,
  });
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  let project = await Project.findById({ id });

  res.json({
    sucess: true,
    project,
  });
};

export const updateStatus = async (req, res) => {
  const { requirements, completed_requirements } = req.body;
  const { id } = req.params;

  let n = requirements.length;
  let incomplete_requirements = n - completed_requirements;

  let percent_completed = (incomplete_requirements / n) * 100;

  try {
    let project = await Project.findByIdAndUpdate(
      id,
      { $set: { percent_completed: percent_completed } },
      { new: true }
    );

    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
