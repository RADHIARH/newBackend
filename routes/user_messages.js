const controller = require("../controllers/controller");
const express = require("express");
const middleware = require("../middleware/middleware");
const router = express.Router();
router.get("/", middleware.verifyToken, controller.getusermessages);
module.exports = router;
