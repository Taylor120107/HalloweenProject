const express = require("express");
const app = express ();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db",
    function (err) {
        if (err) {
            "errored"
        } else (console.log("Connection Successful")
        )
    });


app.use(bodyParser.json());

const route = require(`./routes/route`);

app.use(route);


app.use(express.json());

const server = app.listen(1207,() => {console.log(`server has started succesfully on port number ${server.address().port}`)});

module.exports=server
