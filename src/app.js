const express = require("express");
const harryPotterRouter = require('./routes/harryPotter');


const app = express();

app.use(express.json());

app.use('/wizards', harryPotterRouter);

module.exports = app;
