const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const validateRegisterInput = require("models/validation/register.js");
const validateLoginInput = require("/validation/login.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("/config/keys.js");
const User = require("/models/User.js");
const session = require('client-sessions');
const alert = require('alert-node');
const nodemailer = require('nodemailer');

const Train = require("/models/Trains.js");
var fs = require('fs');
const users = require("./models/validation/routes/api/users");

const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
