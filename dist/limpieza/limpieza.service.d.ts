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
/// <reference types="mongoose/types/inferschematype" />
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { Limpieza } from './entities/limpieza.entity';
import { Model } from 'mongoose';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';
export declare class LimpiezaService {
    private readonly limpiezaModel;
    private readonly habitacionModel;
    constructor(limpiezaModel: Model<Limpieza>, habitacionModel: Model<Habitacion>);
    create(createLimpiezaDto: CreateLimpiezaDto): Promise<import("mongoose").Document<unknown, {}, Limpieza> & Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Limpieza> & Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findByHabId(id: number): Promise<(import("mongoose").Document<unknown, {}, Limpieza> & Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(id: string, updateLimpiezaDto: UpdateLimpiezaDto): Promise<import("mongoose").Document<unknown, {}, Limpieza> & Limpieza & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    checkIfHabIsClean(id: string): Promise<{
        ok: boolean;
    }>;
    getHabsCleanToday(): Promise<(import("mongoose").Document<unknown, {}, Habitacion> & Habitacion & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
