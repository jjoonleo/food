let mongoose = require("mongoose");

const errorHandler = (error, req, res, next) => {
    console.log("errorHandler middleware");
    console.log(error.name);
    let response;
    if(error.name == "MongoServerError"){
        if(error.code == 11000){
            console.log("duplicate key error");
            console.log(error.message);
            response = {
                error:{
                    code: error.code,
                    message:"duplicate key error",
                    name: error.name,
                }
            };
            res.status(405).json(response);
        }
    }
    return res.status(400).send(error.message);
}

module.exports = errorHandler;