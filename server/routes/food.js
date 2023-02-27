const express = require("express");
const router = express.Router();
let {tryCatch} = require("../utils/tryCatch");

router.use((req, res, next) => {
    console.log("food middleware is called");
    next();
});

router.get("/", async (req,res)=>{
    console.log("get / called");
    let db = req.app.get("database");
    let query={};
    console.log(req.query.restaurant);
    if(req.query?.restaurant){
        let restaurant = await db.Restaurant.findOne({name:req.query.restaurant[0]});
        console.log(`restaurant name : ${restaurant?.name}`);
        if(!restaurant){
            return res.status(400).json({error:{message:"no such restaurant exists"}});
        }
        query = {restaurant:restaurant._id};
    }
    console.log(query);
    let result = await db.Food.find(query);
    return res.status(200).json({result:result});
    
    
});

router.post("/", tryCatch(async(req, res)=>{
    console.log("post '/' called");
    console.log(req.body);
    let db = req.app.get("database");

    let restaurant = await db.Restaurant.findOne({name:req.body.restaurant})
    console.log(restaurant);
    req.body.restaurant = restaurant._id;
    let food = new db.Food(req.body);
    let result = await food.save();

    if(result){
        console.log(`${result.name} successfuly added to database`);
        return res.status(201).json({
            result:result,
            message: `successfuly added ${result.name} to database` 
        });
    }
}));

module.exports = router;