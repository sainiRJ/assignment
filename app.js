const express = require('express');
const path = require("path");
const db = require('./util/database')

const app = express();

const bodyParser = require('body-parser');

employeeRoutes= require("./routes/employee")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(employeeRoutes);
app.listen(3001)