import Designer from "../models/designer.js";

export const newDesigner = async (req, res) => {
  const { designer_id, portfolio_website, expertise, experience } = req.body;

  let designer = await Designer.create({
    designer_id,
    portfolio_website,
    expertise,
    experience,
  });
  res.json({
    sucess: true,
    designer,
  });
};
