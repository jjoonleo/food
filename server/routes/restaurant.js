const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
    console.log("restaurant middleware is called");
    next();
});



module.exports = router;