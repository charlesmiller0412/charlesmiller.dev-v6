const express = require("express");
const router = express.Router();
const { getFavorites } = require("../controller/projectController");

// get favorite projects
router.get("/", getFavorites);

module.exports = router;
