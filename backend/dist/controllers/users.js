"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.create = exports.login = void 0;
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("../models/User"));
var crypto_1 = __importDefault(require("../services/crypto"));
exports.login = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var email, password, user, refreshToken, refreshTokenValidity, userData, jwt, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = request.body.email;
                password = request.body.password;
                user = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, getUser(email)];
            case 2:
                user = _a.sent();
                if (!(user && crypto_1["default"].checkPassword(password, user.password))) return [3 /*break*/, 4];
                refreshToken = crypto_1["default"].createHash();
                refreshTokenValidity = new Date();
                refreshTokenValidity.setHours(refreshTokenValidity.getHours() + 2);
                return [4 /*yield*/, updateUser(__assign(__assign({}, user), { refreshToken: refreshToken,
                        refreshTokenValidity: refreshTokenValidity }))];
            case 3:
                user = _a.sent();
                userData = __assign({}, user);
                refreshToken = userData.refreshToken;
                delete userData.password;
                delete userData.refreshToken;
                delete userData.refreshTokenValidity;
                delete userData.createdAt;
                delete userData.updatedAt;
                jwt = crypto_1["default"].createJWT(userData);
                userData = __assign(__assign({}, userData), { refreshToken: refreshToken,
                    jwt: jwt });
                return [2 /*return*/, response.json(userData)];
            case 4: return [2 /*return*/, response.status(401).send('Not authorized')];
            case 5:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var getUser = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var repo, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                repo = typeorm_1.getRepository(User_1["default"]);
                return [4 /*yield*/, repo.findOne({
                        where: {
                            email: email
                        }
                    })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
var updateUser = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var repo, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                repo = typeorm_1.getRepository(User_1["default"]);
                return [4 /*yield*/, repo.findOne({
                        where: {
                            id: data.id
                        }
                    })];
            case 1:
                user = _a.sent();
                Object.entries(data).forEach(function (element) {
                    var _a;
                    user = __assign(__assign({}, user), (_a = {}, _a[element[0]] = element[1], _a));
                });
                return [4 /*yield*/, repo.save(user)];
            case 2:
                _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
exports.create = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var password, refreshToken, refreshTokenValidity, user, repo, e_2, userData, jwt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                password = request.body.password;
                return [4 /*yield*/, crypto_1["default"].hash(password)];
            case 1:
                password = _a.sent();
                refreshToken = crypto_1["default"].createHash();
                refreshTokenValidity = new Date();
                refreshTokenValidity.setHours(refreshTokenValidity.getHours() + 2);
                user = __assign(__assign({}, request.body), { password: password,
                    refreshToken: refreshToken,
                    refreshTokenValidity: refreshTokenValidity });
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                repo = typeorm_1.getRepository(User_1["default"]);
                return [4 /*yield*/, repo.save(user)];
            case 3:
                user = _a.sent();
                return [3 /*break*/, 5];
            case 4:
                e_2 = _a.sent();
                return [2 /*return*/, response.status(501).send('User not created')];
            case 5:
                userData = __assign({}, user);
                delete userData.password;
                delete userData.refreshToken;
                delete userData.refreshTokenValidity;
                delete userData.createdAt;
                delete userData.updatedAt;
                jwt = crypto_1["default"].createJWT(userData);
                response.status(201).json(__assign(__assign({}, userData), { jwt: jwt, refreshToken: user.refreshToken }));
                return [2 /*return*/];
        }
    });
}); };
