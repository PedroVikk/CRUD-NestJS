import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalasService } from './salas.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('salas')
@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar uma nova sala' })
  create(@Body() createSalaDto: CreateSalaDto) {
    return this.salasService.create(createSalaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as salas' })
  findAll() {
    return this.salasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma sala pelo ID' })
  findOne(@Param('id') id: string) {
    return this.salasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma sala' })
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto) {
    return this.salasService.update(+id, updateSalaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma sala' })
  remove(@Param('id') id: string) {
    return this.salasService.remove(+id);
  }

  @Patch(':id/reservar-poltrona')
  @ApiOperation({ summary: 'Reservar uma poltrona da sala' })
  reservarPoltrona(
    @Param('id') id: string,
    @Body('fila') fila: number,
    @Body('num') num: number,
  ) {
    return this.salasService.reservarPoltrona(+id, fila, num);
  }

  @Get(':id/capacidade')
  @ApiOperation({ summary: 'Calcular a capacidade da sala' })
  calcularCapacidade(@Param('id') id: string) {
    return this.salasService.calcularCapacidade(+id);
  }
}
