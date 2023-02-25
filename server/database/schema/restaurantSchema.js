let Schema = {};

Schema.createSchema = (mongoose) => {
    let restaurantSchema = mongoose.Schema({
        name: {type: String, required: true, unique: true},
    });

    console.log("restaurantSchema is defined.");
    
    return restaurantSchema;
};

module.exports = Schema;