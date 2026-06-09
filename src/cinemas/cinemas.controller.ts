import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CinemasService } from './cinemas.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { CreateSalaDto } from '../salas/dto/create-sala.dto';
import { CreateFilmeDto } from '../filmes/dto/create-filme.dto';
import { CreateSessaoDto } from '../sessoes/dto/create-sessao.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('cinemas')
@Controller('cinemas')
export class CinemasController {
  constructor(private readonly cinemasService: CinemasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo cinema' })
  create(@Body() createCinemaDto: CreateCinemaDto) {
    return this.cinemasService.create(createCinemaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cinemas' })
  findAll() {
    return this.cinemasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um cinema pelo ID' })
  findOne(@Param('id') id: string) {
    return this.cinemasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um cinema' })
  update(@Param('id') id: string, @Body() updateCinemaDto: UpdateCinemaDto) {
    return this.cinemasService.update(+id, updateCinemaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um cinema' })
  remove(@Param('id') id: string) {
    return this.cinemasService.remove(+id);
  }

  @Post(':id/salas')
  @ApiOperation({ summary: 'Cadastrar uma sala no cinema' })
  cadastrarSala(@Param('id') id: string, @Body() dto: CreateSalaDto) {
    return this.cinemasService.cadastrarSala(+id, dto);
  }

  @Delete('salas/:salaId')
  @ApiOperation({ summary: 'Remover uma sala' })
  removerSala(@Param('salaId') salaId: string) {
    return this.cinemasService.removerSala(+salaId);
  }

  @Post(':id/filmes')
  @ApiOperation({ summary: 'Cadastrar um filme no cinema' })
  cadastrarFilme(@Param('id') id: string, @Body() dto: CreateFilmeDto) {
    return this.cinemasService.cadastrarFilme(+id, dto);
  }

  @Delete('filmes/:filmeId')
  @ApiOperation({ summary: 'Remover um filme' })
  removerFilme(@Param('filmeId') filmeId: string) {
    return this.cinemasService.removerFilme(+filmeId);
  }

  @Post(':id/sessoes')
  @ApiOperation({ summary: 'Cadastrar uma sessão no cinema' })
  cadastrarSessao(@Param('id') id: string, @Body() dto: CreateSessaoDto) {
    return this.cinemasService.cadastrarSessao(+id, dto);
  }

  @Delete('sessoes/:sessaoId')
  @ApiOperation({ summary: 'Remover uma sessão' })
  removerSessao(@Param('sessaoId') sessaoId: string) {
    return this.cinemasService.removerSessao(+sessaoId);
  }
}
