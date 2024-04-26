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
exports.LimpiezaController = void 0;
const common_1 = require("@nestjs/common");
const limpieza_service_1 = require("./limpieza.service");
const create_limpieza_dto_1 = require("./dto/create-limpieza.dto");
const update_limpieza_dto_1 = require("./dto/update-limpieza.dto");
const auth_guard_1 = require("../auth/auth.guard");
let LimpiezaController = class LimpiezaController {
    constructor(limpiezaService) {
        this.limpiezaService = limpiezaService;
    }
    findCleanedHabs() {
        return this.limpiezaService.getHabsCleanToday();
    }
    create(createLimpiezaDto) {
        return this.limpiezaService.create(createLimpiezaDto);
    }
    findAll() {
        return this.limpiezaService.findAll();
    }
    update(id, updateLimpiezaDto) {
        return this.limpiezaService.update(id, updateLimpiezaDto);
    }
    findOne(id) {
        return this.limpiezaService.findByHabId(+id);
    }
    checkIfHabIsClean(id) {
        return this.limpiezaService.checkIfHabIsClean(id);
    }
};
exports.LimpiezaController = LimpiezaController;
__decorate([
    (0, common_1.Get)('/limpias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LimpiezaController.prototype, "findCleanedHabs", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_limpieza_dto_1.CreateLimpiezaDto]),
    __metadata("design:returntype", void 0)
], LimpiezaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LimpiezaController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_limpieza_dto_1.UpdateLimpiezaDto]),
    __metadata("design:returntype", void 0)
], LimpiezaController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LimpiezaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/limpia/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LimpiezaController.prototype, "checkIfHabIsClean", null);
exports.LimpiezaController = LimpiezaController = __decorate([
    (0, common_1.Controller)('limpieza'),
    __metadata("design:paramtypes", [limpieza_service_1.LimpiezaService])
], LimpiezaController);
//# sourceMappingURL=limpieza.controller.js.map