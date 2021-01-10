"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cars_1 = require("../controllers/cars");
var carRouter = express_1.Router();
carRouter.post('/save', cars_1.save);
exports["default"] = carRouter;
