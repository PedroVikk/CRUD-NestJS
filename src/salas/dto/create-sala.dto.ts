import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt } from 'class-validator';

export class CreateSalaDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  numero: number;

  @ApiProperty({ example: 100 })
  @IsInt()
  capacidade: number;

  @ApiProperty({
    example: [
      [0, 0, 0],
      [0, 0, 0],
    ],
    description: 'Matriz de poltronas (0 = livre, 1 = reservada)',
  })
  @IsArray()
  poltronas: number[][];

  @ApiProperty({ example: 1, description: 'ID do cinema' })
  @IsInt()
  cinemaId: number;
}
