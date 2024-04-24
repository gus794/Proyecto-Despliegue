import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';

@Schema()
export class Limpieza extends Document {
  @Prop({
    type: 'ObjectId',
    ref: 'Habitacion',
    required: true,
  })
  habitacion: Habitacion;

  @Prop({
    required: true,
    trim: true,
    default: Date.now,
  })
  fecha: Date;

  @Prop()
  observaciones: string;
}

export const LimpiezaSchema = SchemaFactory.createForClass(Limpieza);
