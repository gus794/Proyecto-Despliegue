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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLimpiezaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateLimpiezaDto {
}
exports.CreateLimpiezaDto = CreateLimpiezaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El id de habitación es obligatorio' }),
    (0, class_validator_1.IsMongoId)({ message: 'El id de la habitación no es válida' }),
    __metadata("design:type", String)
], CreateLimpiezaDto.prototype, "habitacion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha es obligatoria' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateLimpiezaDto.prototype, "fecha", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Las observaciones deben ser una cadena de texto' }),
    __metadata("design:type", String)
], CreateLimpiezaDto.prototype, "observaciones", void 0);
//# sourceMappingURL=create-limpieza.dto.js.map