import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { LimpiezaService } from './limpieza.service';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('limpieza')
export class LimpiezaController {
  constructor(private readonly limpiezaService: LimpiezaService) {}

  @Get('/limpias')
  findCleanedHabs() {
    return this.limpiezaService.getHabsCleanToday();
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createLimpiezaDto: CreateLimpiezaDto) {
    return this.limpiezaService.create(createLimpiezaDto);
  }

  @Get()
  findAll() {
    return this.limpiezaService.findAll();
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLimpiezaDto: UpdateLimpiezaDto,
  ) {
    return this.limpiezaService.update(id, updateLimpiezaDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.limpiezaService.findByHabId(+id);
  }

  @Get('/limpia/:id')
  checkIfHabIsClean(@Param('id') id: string) {
    return this.limpiezaService.checkIfHabIsClean(id);
  }
}
