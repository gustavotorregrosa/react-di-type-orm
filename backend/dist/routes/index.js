"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var user_routes_1 = __importDefault(require("./user.routes"));
var test_routes_1 = __importDefault(require("./test.routes"));
var routes = express_1.Router();
routes.use('/user', user_routes_1["default"]);
routes.use('/test', test_routes_1["default"]);
exports["default"] = routes;
