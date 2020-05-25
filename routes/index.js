const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
