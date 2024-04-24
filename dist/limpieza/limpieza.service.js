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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimpiezaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LimpiezaService = class LimpiezaService {
    constructor(limpiezaModel, habitacionModel) {
        this.limpiezaModel = limpiezaModel;
        this.habitacionModel = habitacionModel;
    }
    async create(createLimpiezaDto) {
        const nuevaLimpieza = await this.limpiezaModel.create(createLimpiezaDto);
        await this.habitacionModel.findByIdAndUpdate(nuevaLimpieza.habitacion, { ultimaLimpieza: nuevaLimpieza.fecha }, { new: true });
        return nuevaLimpieza;
    }
    async findAll() {
        const limpiezas = await this.limpiezaModel.find();
        return limpiezas;
    }
    async findByHabId(id) {
        const resultado = await this.limpiezaModel
            .find({ habitacion: id })
            .sort({ fecha: -1 });
        return resultado;
    }
    async update(id, updateLimpiezaDto) {
        const LimpiezaActualizada = await this.limpiezaModel.findByIdAndUpdate(id, { $set: updateLimpiezaDto }, { new: true });
        return LimpiezaActualizada;
    }
    async checkIfHabIsClean(id) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const habitacionLimpia = await this.limpiezaModel.exists({
            habitacion: id,
            fecha: { $gte: today },
        });
        const ok = habitacionLimpia ? true : false;
        return { ok: ok };
    }
    async getHabsCleanToday() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        console.log(today);
        return this.habitacionModel.find({
            ultimaLimpieza: { $gte: today, $lte: tomorrow },
        });
    }
};
exports.LimpiezaService = LimpiezaService;
exports.LimpiezaService = LimpiezaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('limpiezas')),
    __param(1, (0, mongoose_1.InjectModel)('habitaciones')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LimpiezaService);
//# sourceMappingURL=limpieza.service.js.map