const express = require("express");
const CountriesRouter = require("./routes/CountriesRou");
const ActivitiesRoute = require("./routes/ActivitiesRou")
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(CountriesRouter);
server.use(ActivitiesRoute);


module.exports = server;
