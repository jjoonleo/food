const express = require("express");
const router = express.Router();
let tryCatch = require("../utils/tryCatch");

router.use((req, res, next) => {
    console.log("food middleware is called");
    next();
});

router.get("/all", (req,res)=>{
    console.log("get /all called");
    let db = req.app.get("database");
    db.Food.find((error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.json(result);
        }
    })
});

router.post("/", async(req, res)=>{
    console.log("post called");
    console.log(req.body);
    let db = req.app.get("database");

    let restaurant = await db.Restaurant.findOne({name:req.body.restaurant})
    console.log(restaurant);
    req.body.restaurant = restaurant._id;
    let food = new db.Food(req.body);
    food.save((error, _food) => {
        if (error){
            throw error;
        }
        else{
            console.log(_food.name + " saved to foods collection.");
            res.status(201).json({success:true});
        }
    });
});

module.exports = router;