import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioDto } from 'src/usuario/dto/usuario-dto/usuario-dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() usuarioDto: UsuarioDto) {
    const token = await this.authService.login(
      usuarioDto.login,
      usuarioDto.password,
    );
    return { ok: true, resultado: token };
  }
}
