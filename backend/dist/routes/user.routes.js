"use strict";
exports.__esModule = true;
var express_1 = require("express");
var users_1 = require("../controllers/users");
var userRouter = express_1.Router();
userRouter.post('/create', users_1.create);
userRouter.post('/login', users_1.login);
userRouter.post('/refresh', users_1.renewJWT);
exports["default"] = userRouter;
