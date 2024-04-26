import { Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel('usuarios')
    private readonly usuarioModel: Model<Usuario>,
  ) {}

  async find(login: string, password: string) {
    const resultado = await this.usuarioModel.find({
      login: login,
      password: password,
    });
    return resultado;
  }
}
