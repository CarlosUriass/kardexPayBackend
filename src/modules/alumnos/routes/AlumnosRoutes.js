const express = require("express");
const { getStudentData } = require("../controllers/AlumnosController");

const router = express.Router();

router.post("/getData", getStudentData);

module.exports = router;
