const express = require("express");
const router = express.Router();
let { tryCatch } = require("../utils/tryCatch");

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

router.post("/", tryCatch(async (req, res)=>{
    console.log("post '/' called");
    console.log(req.body);
    let db = req.app.get("database");
    let restaurant = new db.Restaurant({name: req.body.name});
    let result = await restaurant.save();
    
    if(result){
        console.log(`${result.name} successfuly added to database`);
        return res.status(201).json({success:true});
    }
}));

module.exports = router;