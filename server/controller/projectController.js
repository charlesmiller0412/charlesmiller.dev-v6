const Project = require("../model/projectModel");

// get all projects
const getFavorites = async (req, res) => {
    const projects = await Project.find({ favorite: true });
    res.status(200).json(projects);
    console.log("app is running");
    return;
};

module.exports = {
    getFavorites,
};
