module.exports = {
    sever_port: 8000,
    db_url:
      "mongodb+srv://ejun:j6432636@profile.vrk9e.mongodb.net/food?authSource=admin&replicaSet=atlas-ez24ee-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true",
    db_schemas: [
        {
            schemaName: "foodSchema",
            modelName: "Food",
        },
        {
            schemaName: "restaurantSchema",
            modelName: "Restaurant",
        },
    ],
    middleware_info: [
        {
            path: "/restaurant",
        }
    ],
  };