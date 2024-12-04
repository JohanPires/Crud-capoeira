const express = require("express");
const router = express.Router();
const SchoolControl = require("../Controller/SchoolController");

router.get("/school", SchoolControl.getAllSchool);
router.get("/school/:id", SchoolControl.getOneSchool);
router.post("/school", SchoolControl.createSchool);
router.put("/school/:id", SchoolControl.updateSchool);
router.delete("/school/:id", SchoolControl.deleteSchool);

module.exports = router;
