import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt } from 'class-validator';

export class CreateSessaoDto {
  @ApiProperty({ example: '2024-05-10T20:00:00.000Z' })
  @IsDateString()
  horarioExibicao: string;

  @ApiProperty({ example: 1, description: 'ID do filme' })
  @IsInt()
  filmeId: number;

  @ApiProperty({ example: 1, description: 'ID da sala' })
  @IsInt()
  salaId: number;

  @ApiProperty({ example: 1, description: 'ID do cinema' })
  @IsInt()
  cinemaId: number;
}
