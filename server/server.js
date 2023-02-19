require("dotenv").config();

const bodyParser = require('body-parser');
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.get("/hi", (req, res) => {
    console.log("/ called");
    res.json({
        "msg":"hello world!",
    });
});

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE.ENV} mode on port ${PORT}`)
);