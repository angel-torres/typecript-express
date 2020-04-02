"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require("express");
const mongoose = require("mongoose");
const cookeParser = require("cookie-parser");
// ROUTES
const recipesRoute_1 = require("./routes/recipesRoute");
const usersRoute_1 = require("./routes/usersRoute");
const auth_1 = require("./routes/auth");
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// INTIALIZING EXPRESS APP
const app = express();
app.use(cors());
const port = parseInt(process.env.PORT) || 3000;
app.set("port", process.env.PORT || 3000);
// MIDDLEWARE
app.use(express.json());
app.use(cookeParser());
app.use(helmet());
// ROUTES
app.use('/recipes', recipesRoute_1.default);
app.use('/users', usersRoute_1.default);
app.use('/auth', auth_1.default);
app.get('/', (req, res) => {
    try {
        res.send("<h1>Welcome to Recipes API</h1>");
    }
    catch (error) {
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map