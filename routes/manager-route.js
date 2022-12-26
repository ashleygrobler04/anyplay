const express = require("express");
const { signup, signin, upload, browse } = require("../controllers/manager");

const router = express.Router();

router.route("/signup").get(signup);

router.route("/signin").get(signin);

router.route("/upload").get(upload);

router.route("/browse").get(browse);

module.exports = router;
