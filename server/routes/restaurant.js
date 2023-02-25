const express = require("express");
const router = express.Router();
let tryCatch = require("../utils/tryCatch");

router.use((req, res, next) => {
    console.log("restaurant middleware is called");
    next();
});

router.get("/all", (req,res)=>{
    console.log("get /all called");
    let db = req.app.get("database");
    db.Restaurant.find((error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.json(result);
        }
    })
});

router.post("/", tryCatch((req, res)=>{
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
}));

module.exports = router;