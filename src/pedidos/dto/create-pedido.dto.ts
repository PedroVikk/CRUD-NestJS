import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class CreatePedidoDto {
  @ApiProperty({ example: 2 })
  @IsInt()
  qtInteira: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  qtMeia: number;

  @ApiProperty({ example: 75.0 })
  @IsNumber()
  valorTotal: number;
}
