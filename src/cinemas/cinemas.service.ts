import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { CreateSalaDto } from '../salas/dto/create-sala.dto';
import { CreateFilmeDto } from '../filmes/dto/create-filme.dto';
import { CreateSessaoDto } from '../sessoes/dto/create-sessao.dto';

@Injectable()
export class CinemasService {
  constructor(private prisma: PrismaService) {}

  create(createCinemaDto: CreateCinemaDto) {
    return this.prisma.cinema.create({ data: createCinemaDto });
  }

  findAll() {
    return this.prisma.cinema.findMany();
  }

  findOne(id: number) {
    return this.prisma.cinema.findUnique({
      where: { id },
      include: { salas: true, filmes: true, sessoes: true },
    });
  }

  update(id: number, updateCinemaDto: UpdateCinemaDto) {
    return this.prisma.cinema.update({ where: { id }, data: updateCinemaDto });
  }

  remove(id: number) {
    return this.prisma.cinema.delete({ where: { id } });
  }

  cadastrarSala(id: number, dto: CreateSalaDto) {
    return this.prisma.sala.create({ data: { ...dto, cinemaId: id } });
  }

  removerSala(salaId: number) {
    return this.prisma.sala.delete({ where: { id: salaId } });
  }

  cadastrarFilme(id: number, dto: CreateFilmeDto) {
    return this.prisma.filme.create({ data: { ...dto, cinemaId: id } });
  }

  removerFilme(filmeId: number) {
    return this.prisma.filme.delete({ where: { id: filmeId } });
  }

  cadastrarSessao(id: number, dto: CreateSessaoDto) {
    return this.prisma.sessao.create({ data: { ...dto, cinemaId: id } });
  }

  removerSessao(sessaoId: number) {
    return this.prisma.sessao.delete({ where: { id: sessaoId } });
  }
}
