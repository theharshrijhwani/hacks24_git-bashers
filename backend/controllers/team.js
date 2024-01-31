import Team from "../models/team.js";

export const createTeamMember = async (req, res) => {
  const { name, specialization } = req.body;

  let teamMembers = await Team.create({
    name,
    specialization,
  });
  res.json({
    teamMembers,
  });
};
