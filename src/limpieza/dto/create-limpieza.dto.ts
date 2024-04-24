import { IsDateString, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateLimpiezaDto {
  @IsNotEmpty({ message: 'El id de habitación es obligatorio' })
  @IsMongoId({ message: 'El id de la habitación no es válida' })
  readonly habitacion: string;

  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @IsDateString()
  readonly fecha: Date;

  @IsString({ message: 'Las observaciones deben ser una cadena de texto' })
  readonly observaciones?: string;
}
