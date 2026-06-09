import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLancheComboDto {
  @ApiProperty({ example: 'Combo Pipoca Grande' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'Pipoca grande + refrigerante 500ml' })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({ example: 25.5 })
  @IsNumber()
  valorUnitario: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  qtUnidade: number;

  @ApiProperty({ example: 51.0 })
  @IsNumber()
  subtotal: number;

  @ApiProperty({ example: 1, required: false, description: 'ID do pedido' })
  @IsOptional()
  @IsInt()
  pedidoId?: number;
}
