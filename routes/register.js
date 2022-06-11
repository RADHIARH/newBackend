const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
router.post("/", controller.register);
module.exports = router;
