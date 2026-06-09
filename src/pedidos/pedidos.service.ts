import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  create(createPedidoDto: CreatePedidoDto) {
    return this.prisma.pedido.create({ data: createPedidoDto });
  }

  findAll() {
    return this.prisma.pedido.findMany({
      include: { ingressos: true, lanches: true },
    });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: { ingressos: true, lanches: true },
    });
    if (!pedido) throw new NotFoundException('Pedido não encontrado');
    return pedido;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedido.update({ where: { id }, data: updatePedidoDto });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }

  async adicionarLanche(id: number, lancheId: number) {
    await this.prisma.lancheCombo.update({
      where: { id: lancheId },
      data: { pedidoId: id },
    });
    return this.findOne(id);
  }

  async removerLanche(id: number, lancheId: number) {
    await this.prisma.lancheCombo.update({
      where: { id: lancheId },
      data: { pedidoId: null },
    });
    return this.findOne(id);
  }

  async adicionarIngresso(id: number, ingressoId: number) {
    await this.prisma.ingresso.update({
      where: { id: ingressoId },
      data: { pedidoId: id },
    });
    return this.findOne(id);
  }

  async removerIngresso2(id: number, ingressoId: number) {
    await this.prisma.ingresso.update({
      where: { id: ingressoId },
      data: { pedidoId: null },
    });
    return this.findOne(id);
  }
}
