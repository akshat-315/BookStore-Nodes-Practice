const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");

router.post("/user/sign-up", UserController.userSignUp);
router.post("/user/log-in", UserController.userLogIn);

module.exports = router;
