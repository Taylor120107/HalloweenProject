const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const bodyParser = require("body-parser")

app.use(bodyParser.json());

const route = require(`./routes/halloween`);

app.use("/halloween", route);

const server = app.listen(1207, () => {
    console.log(`server has started succesfully on port number ${server.address().port}`)
});

module.exports = server;
