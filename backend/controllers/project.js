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
    completed_requirements,
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
  console.log(req.params);
  const { projectId } = req.params;

  let project = await Project.findOne({ _id: projectId })
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrStatus = async (req, res) => {
  console.log(req.params);
  const { projectId } = req.params;
  // console.log(id);

  const project = Project.findOne({ _id: projectId })
    .then((result) => {
      console.log(result);
      const total = result.requirements.length;
      const complete = result.completed_requirements;
      const perc = (complete / total) * 100;
      res.json({ percentage: perc });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateStatus = async (req, res) => {
  const { completed_requirements } = req.body;
  const { projectID } = req.params;
  const project = await Project.findByIdAndUpdate(
    projectID,
    { $set: { completed_requirements: completed_requirements } },
    { new: true }
  );
  if (!project) {
    return res
      .status(404)
      .json({ success: false, message: "Project not found" });
  }
  res.json({ success: true, project });
};
