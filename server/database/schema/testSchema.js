let Schema = {};

Schema.createSchema = (mongoose) => {
    let TicketSchema = mongoose.Schema({
        date: {type: Date, required: true},
        owner: {type: mongoose.Schema.Types.ObjectId, ref:"users", required: true},
        transferStatus: {type: Number, default:0}, //0:before 1:ongoing 2:end 
        highestPrice: {type: Number, default:0},
        highestPricePerson: {type: mongoose.Schema.Types.ObjectId, ref:"users"},
    });

    console.log("Ticket Schema defined.");
    
    return TicketSchema;
};

module.exports = Schema;