const express = require("express");
const get = require("../controllers/c");

const router = express.Router();

router.get("/audio/:size", get);

module.exports = router;
