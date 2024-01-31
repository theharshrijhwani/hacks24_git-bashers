import Designer from "../models/designer.js";
import UserModel from "../models/UserModel.js";

export const newDesigner = async(req,res)=>{
    const {name} = req.user;
    const {rating , portfolio_website , expertise , experience} = req.body;

    let designer = await Designer.create({
        rating ,
        portfolio_Website,
        expertise,
        experience,
    })
    res.json({
        sucess:true,
        designer,
    })
}

