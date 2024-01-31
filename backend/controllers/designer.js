import Designer from "../models/designer.js";

export const newDesigner = async (req, res) => {
  const { name } = req.user;
  const { portfolio_website, expertise, experience } = req.body;

  let designer = await Designer.create({
    portfolio_website,
    expertise,
    experience,
  });
  res.json({
    sucess: true,
    designer,
  });
};
