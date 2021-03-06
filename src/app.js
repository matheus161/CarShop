const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.use(cors());

module.exports = app;