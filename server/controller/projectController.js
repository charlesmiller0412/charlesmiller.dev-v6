const Project = require("../model/projectModel");

// get all projects
const getFavorites = async (req, res) => {
    const projects = await Project.find({ favorite: true }).sort({ list: 1 });
    res.status(200).json(projects);
    console.log("app is running");
    return;
};

module.exports = {
    getFavorites,
};
