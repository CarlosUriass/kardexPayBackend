const express = require("express");
const { login } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login); // POST en /login bajo /auth

module.exports = router;
