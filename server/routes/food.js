const express = require("express");
const router = express.Router();
let tryCatch = require("../utils/tryCatch");

router.use((req, res, next) => {
    console.log("food middleware is called");
    next();
});

module.exports = router;module.exports = router;