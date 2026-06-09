import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LancheCombosService } from './lanche-combos.service';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('lanche-combos')
@Controller('lanche-combos')
export class LancheCombosController {
  constructor(private readonly lancheCombosService: LancheCombosService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo lanche/combo' })
  create(@Body() createLancheComboDto: CreateLancheComboDto) {
    return this.lancheCombosService.create(createLancheComboDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os lanches/combos' })
  findAll() {
    return this.lancheCombosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um lanche/combo pelo ID' })
  findOne(@Param('id') id: string) {
    return this.lancheCombosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um lanche/combo' })
  update(
    @Param('id') id: string,
    @Body() updateLancheComboDto: UpdateLancheComboDto,
  ) {
    return this.lancheCombosService.update(+id, updateLancheComboDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um lanche/combo' })
  remove(@Param('id') id: string) {
    return this.lancheCombosService.remove(+id);
  }
}
