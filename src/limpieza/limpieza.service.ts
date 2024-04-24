import { Injectable } from '@nestjs/common';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { Limpieza } from './entities/limpieza.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';

@Injectable()
export class LimpiezaService {
  constructor(
    @InjectModel('limpiezas')
    private readonly limpiezaModel: Model<Limpieza>,
    @InjectModel('habitaciones')
    private readonly habitacionModel: Model<Habitacion>,
  ) {}

  async create(createLimpiezaDto: CreateLimpiezaDto) {
    const nuevaLimpieza = await this.limpiezaModel.create(createLimpiezaDto);
    await this.habitacionModel.findByIdAndUpdate(
      nuevaLimpieza.habitacion,
      { ultimaLimpieza: nuevaLimpieza.fecha },
      { new: true },
    );
    return nuevaLimpieza;
  }

  async findAll() {
    const limpiezas = await this.limpiezaModel.find();
    return limpiezas;
  }

  async findByHabId(id: number) {
    const resultado = await this.limpiezaModel
      .find({ habitacion: id })
      .sort({ fecha: -1 });
    return resultado;
  }

  async update(id: string, updateLimpiezaDto: UpdateLimpiezaDto) {
    const LimpiezaActualizada = await this.limpiezaModel.findByIdAndUpdate(
      id,
      { $set: updateLimpiezaDto },
      { new: true },
    );
    return LimpiezaActualizada;
  }

  async checkIfHabIsClean(id: string) {
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
}
