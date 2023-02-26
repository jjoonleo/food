let Schema = {};

Schema.createSchema = (mongoose) => {
    let foodSchema = mongoose.Schema({
        name: {type: String, required: true, unique: true},
        spicy: {type: Number, required: true},//0:불닭이상 1:신라면 이상  2:매운 맛이 존재 4:매운맛이 없음
        temperature: {type: Number, required: true},//0:HOT 1: NORMAL 2: COLD

        isSweet: {type:Boolean, required: true}, 
        isSalty: {type: Boolean, required: true},

        togo: {type: Boolean, required: true},
        delivery:{type: Boolean, required: true},
        store:{type: Boolean, required: true},

        country: {type: Number, required: true}, //0:한식 1:양식 2:중식 3:일식 4:동남아시아 5:그 외
        cal: {type:Boolean, required: true}, //900 이상 true
        main_ingredient:{type: Number, required: true}, //0:밥 1:면 2:빵 3:떡 4:육류
        restaurant:{type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true},
    });

    console.log("foodSchema is defined.");
    
    return foodSchema;
};

module.exports = Schema;