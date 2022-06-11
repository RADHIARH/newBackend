const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
router.get("/", middleware.verifyToken, controller.getmsggroup);
module.exports = router;
