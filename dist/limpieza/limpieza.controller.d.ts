/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { LimpiezaService } from './limpieza.service';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
export declare class LimpiezaController {
    private readonly limpiezaService;
    constructor(limpiezaService: LimpiezaService);
    findCleanedHabs(): Promise<(import("mongoose").Document<unknown, {}, import("../habitacion/entities/habitacion.entity").Habitacion> & import("../habitacion/entities/habitacion.entity").Habitacion & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(createLimpiezaDto: CreateLimpiezaDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/limpieza.entity").Limpieza> & import("./entities/limpieza.entity").Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/limpieza.entity").Limpieza> & import("./entities/limpieza.entity").Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(id: string, updateLimpiezaDto: UpdateLimpiezaDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/limpieza.entity").Limpieza> & import("./entities/limpieza.entity").Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/limpieza.entity").Limpieza> & import("./entities/limpieza.entity").Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    checkIfHabIsClean(id: string): Promise<{
        ok: boolean;
    }>;
}
