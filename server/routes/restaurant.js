const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
    console.log("restaurant middleware is called");
    next();
});


router.post("/", (req, res)=>{
    console.log("post called");
    console.log(req.body);
    let db = req.app.get("database");
    let restaurant = new db.Restaurant({name: req.body.name});
    restaurant.save((error, _restaurant) => {
        if (error){
            throw error;
        }
        else{
            console.log(_restaurant.name + " saved to bookstore collection.");
            res.status(201).json({success:true});
        }
    });
});

module.exports = router;