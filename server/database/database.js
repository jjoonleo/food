let mongoose = require("mongoose");
let database = {};

database.init = (app, config) => {
    console.log("database.js: init() called.");
    connect(app, config);
};

function connect(app, config) {
    console.log("databse.js: connect() called");

    let databaseUrl = process.env.DATABASE_URL || config.db_url;

    console.log("connecting to database .........");
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl, { useNewUrlParser: true });
    database = mongoose.connection;

    database.on(
        "error",
        console.error.bind(console, "mongoose connection error.")
    );
    database.on("open", function () {
        console.log("successfully connected to database. : " + databaseUrl);

        createSchema(app, config);

        database.on("disconnected", () => {
            console.log("database disconnected. Reconnect in 5 seconds");
            setInterval(connectDB, 5000);
        });
    });
}

function createSchema(app, config) {
    let schemaLen = config.db_schemas.length;
    console.log("number of schemas defined on config.js : %d\n\n", schemaLen);

    for (let i = 0; i < schemaLen; i++) {
        let curItem = config.db_schemas[i];

        let curSchema = require("./schema/"+curItem.schemaName).createSchema(mongoose);
        console.log("%s schema created", curItem.schemaName);

        let curModel = mongoose.model(curItem.modelName, curSchema);
        console.log("%s model created.\n", curItem.modelName);

        database[curItem.schemaName] = curSchema;
        database[curItem.modelName] = curModel;
    }

    app.set("database", database);
}

module.exports = database;
