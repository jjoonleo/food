const express = require("express");
const router = express.Router();
let { tryCatch } = require("../utils/tryCatch");
const fs = require('fs');

router.use((req, res, next) => {
    console.log("restaurant middleware is called");
    next();
});

router.get("/all", tryCatch(async (req,res)=>{
    console.log("get /all called");
    let db = req.app.get("database");
    let result = await db.Restaurant.find();
    res.status(200).json({result:result});
}));

router.get("/add", tryCatch(async (req,res,next)=>{
    console.log("get /add called");
    let db = req.app.get("database");
    let restaurants = await fs.readFileSync('./restaurants.json');
    restaurants = JSON.parse(restaurants);
    restaurants.map(tryCatch(async (data)=>{
        let restaurant = new db.Restaurant(data);
        let result = await restaurant.save();
        if(result){
            console.log(`${result.name} successfuly added to database`);
        }
    }));
    res.status(200).json({success:true});
    
}));

router.post("/", tryCatch(async (req, res)=>{
    console.log("post '/' called");
    console.log(req.body);
    let db = req.app.get("database");
    let restaurant = new db.Restaurant({name: req.body.name});
    let result = await restaurant.save();
    
    
        return res.status(201).json({
            result:result,
            message: `successfuly added ${result.name} to database` 
        });
}));

module.exports = router;