const express = require("express");
const router = express.Router();

const UserController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.post("/logout", checkAuth, UserController.user_logout);

router.get("/get", checkAuth, UserController.user_get);

router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;