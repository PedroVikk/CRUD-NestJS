import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateIngressoDto {
  @ApiProperty({ example: 30.0 })
  @IsNumber()
  valorInteira: number;

  @ApiProperty({ example: 15.0 })
  @IsNumber()
  valorMeia: number;

  @ApiProperty({ example: 1, description: 'ID da sessão' })
  @IsInt()
  sessaoId: number;

  @ApiProperty({ example: 1, required: false, description: 'ID do pedido' })
  @IsOptional()
  @IsInt()
  pedidoId?: number;
}
