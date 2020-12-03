"use strict";
exports.__esModule = true;
var express_1 = require("express");
var test_1 = require("../controllers/test");
var auth_1 = require("../middleware/auth");
var testRouter = express_1.Router();
testRouter.use('/', auth_1.checkJWT);
testRouter.get('/testfunction', test_1.testFunction);
exports["default"] = testRouter;
