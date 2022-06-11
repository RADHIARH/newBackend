const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
router.delete("/:idd", middleware.verifyToken, controller.deletemessage);
module.exports = router;
