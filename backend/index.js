const login = require("./login");
const wishlist = require("./wishlist");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors());

// middleware to talk between login form and sql database
app.use(login.router);

app.use(wishlist.router);

app.listen(3000);
