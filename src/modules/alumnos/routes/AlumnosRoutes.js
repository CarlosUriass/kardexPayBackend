const express = require("express");
const { getStudentData } = require("../controllers/AlumnosController");

const router = express.Router();

router.get("/getData", getStudentData);

module.exports = router;
