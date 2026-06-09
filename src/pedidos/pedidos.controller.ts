import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo pedido' })
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidosService.create(createPedidoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pedidos' })
  findAll() {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um pedido pelo ID' })
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um pedido' })
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidosService.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um pedido' })
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }

  @Patch(':id/adicionar-lanche')
  @ApiOperation({ summary: 'Adicionar um lanche/combo ao pedido' })
  adicionarLanche(@Param('id') id: string, @Body('lancheId') lancheId: number) {
    return this.pedidosService.adicionarLanche(+id, lancheId);
  }

  @Patch(':id/remover-lanche')
  @ApiOperation({ summary: 'Remover um lanche/combo do pedido' })
  removerLanche(@Param('id') id: string, @Body('lancheId') lancheId: number) {
    return this.pedidosService.removerLanche(+id, lancheId);
  }

  @Patch(':id/adicionar-ingresso')
  @ApiOperation({ summary: 'Adicionar um ingresso ao pedido' })
  adicionarIngresso(
    @Param('id') id: string,
    @Body('ingressoId') ingressoId: number,
  ) {
    return this.pedidosService.adicionarIngresso(+id, ingressoId);
  }

  @Patch(':id/remover-ingresso')
  @ApiOperation({ summary: 'Remover um ingresso do pedido' })
  removerIngresso2(
    @Param('id') id: string,
    @Body('ingressoId') ingressoId: number,
  ) {
    return this.pedidosService.removerIngresso2(+id, ingressoId);
  }
}
