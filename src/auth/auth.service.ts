import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async login(login: string, password: string): Promise<any> {
    const usuario = await this.usuarioService.find(login, password);
    if (!usuario) {
      throw new UnauthorizedException();
    }
    const token = await this.jwtService.signAsync({ login: login });
    return token;
  }
}
