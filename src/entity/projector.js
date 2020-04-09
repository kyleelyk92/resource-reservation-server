"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Room_entity_1 = require("./Room.entity");
var User_entity_1 = require("./User.entity");
typeorm_1.Entity();
var Projector = /** @class */ (function () {
    function Projector() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Projector.prototype, "id");
    __decorate([
        typeorm_1.OneToOne(function () { return Room_entity_1["default"]; }, { eager: true })
    ], Projector.prototype, "room");
    __decorate([
        typeorm_1.ManyToMany(function () { return User_entity_1["default"]; }),
        typeorm_1.JoinTable({
            name: 'user_projectors',
            joinColumn: { name: 'projector_id' },
            inverseJoinColumn: { name: 'user_id' }
        })
    ], Projector.prototype, "user");
    return Projector;
}());
exports.Projector = Projector;
