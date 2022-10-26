const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/halloween_db",
    (err) => err ? console.error(err) : console.log("Connect to mongo"));

const halloweenSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    movie: {
        type: String,
        require: true
    },
    scareFactor: {
        type: Number,
        min: 1,
        max: 10,
        require: true
    },
});

const halloweenModel = mongoose.model("halloween", halloweenSchema);
module.exports = { halloweenModel }
