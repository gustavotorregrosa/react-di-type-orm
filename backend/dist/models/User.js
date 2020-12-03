"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", Object)
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "name");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password");
    __decorate([
        typeorm_1.Column({ name: 'refresh_token' }),
        __metadata("design:type", String)
    ], User.prototype, "refreshToken");
    __decorate([
        typeorm_1.Column({ name: 'refresh_token_validity' }),
        __metadata("design:type", Date)
    ], User.prototype, "refreshTokenValidity");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' }),
        __metadata("design:type", Object)
    ], User.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
        __metadata("design:type", Object)
    ], User.prototype, "updatedAt");
    User = __decorate([
        typeorm_1.Entity('user')
    ], User);
    return User;
}());
exports["default"] = User;
