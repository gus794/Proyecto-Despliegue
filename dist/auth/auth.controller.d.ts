import { UsuarioDto } from 'src/usuario/dto/usuario-dto/usuario-dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(usuarioDto: UsuarioDto): Promise<{
        ok: boolean;
        resultado: any;
    }>;
}
