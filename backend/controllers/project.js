import Project from "../models/project.js";

export const newProject = async (req,res)=>{
    const {project_name , location , address , budget , type_of_apartment,number_of_bhk , sqft , preferred_style , deadline , include_furniture , requirements} = req.body;

    let project = await Project.findOne({ project_name});

    if (project) return "project already exist";

    project = await Project.create({
        project_name ,
         location ,
          address ,
           budget ,
            type_of_apartment,
            number_of_bhk , 
            sqft ,
             preferred_style ,
              deadline , 
              include_furniture ,
               requirements
    })
    res.json({
        sucess: true,
        project,
    })

}

 export const deleteProject = async (req,res) =>{
    const {project_name} = req.params;

    let project = await Project.findOne({projectId});

    if(!project)return "project doesnot exist";

    project = await Project.deleteOne({project_name});
 }

