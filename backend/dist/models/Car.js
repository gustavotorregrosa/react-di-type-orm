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
var Car = /** @class */ (function () {
    function Car() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", Object)
    ], Car.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "placa");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "modelo");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Car.prototype, "ano");
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_at' }),
        __metadata("design:type", Object)
    ], Car.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
        __metadata("design:type", Object)
    ], Car.prototype, "updatedAt");
    Car = __decorate([
        typeorm_1.Entity('car')
    ], Car);
    return Car;
}());
exports["default"] = Car;
