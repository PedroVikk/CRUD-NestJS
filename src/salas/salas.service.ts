import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalasService {
  constructor(private prisma: PrismaService) {}

  create(createSalaDto: CreateSalaDto) {
    return this.prisma.sala.create({ data: createSalaDto });
  }

  findAll() {
    return this.prisma.sala.findMany();
  }

  findOne(id: number) {
    return this.prisma.sala.findUnique({ where: { id } });
  }

  update(id: number, updateSalaDto: UpdateSalaDto) {
    return this.prisma.sala.update({ where: { id }, data: updateSalaDto });
  }

  remove(id: number) {
    return this.prisma.sala.delete({ where: { id } });
  }

  async reservarPoltrona(id: number, fila: number, num: number) {
    const sala = await this.prisma.sala.findUnique({ where: { id } });
    if (!sala) throw new NotFoundException('Sala não encontrada');

    const poltronas = sala.poltronas as number[][];
    if (!poltronas[fila] || poltronas[fila][num] === undefined) {
      throw new BadRequestException('Poltrona inexistente');
    }
    if (poltronas[fila][num] === 1) {
      throw new ConflictException('Poltrona já reservada');
    }

    poltronas[fila][num] = 1;
    return this.prisma.sala.update({
      where: { id },
      data: { poltronas },
    });
  }

  async calcularCapacidade(id: number) {
    const sala = await this.prisma.sala.findUnique({ where: { id } });
    if (!sala) throw new NotFoundException('Sala não encontrada');

    const poltronas = sala.poltronas as number[][];
    const capacidade = poltronas.reduce((total, fila) => total + fila.length, 0);
    return { capacidade };
  }
}
