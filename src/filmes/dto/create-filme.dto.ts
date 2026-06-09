import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Genero } from '../../generated/prisma/client';

export class CreateFilmeDto {
  @ApiProperty({ example: 'Interestelar' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 'Uma viagem pelo espaço e pelo tempo.' })
  @IsString()
  @IsNotEmpty()
  sinopse: string;

  @ApiProperty({ example: '12 anos' })
  @IsString()
  @IsNotEmpty()
  classificacao: string;

  @ApiProperty({ example: '2024-01-01T02:49:00.000Z', description: 'Duração' })
  @IsDateString()
  duracao: string;

  @ApiProperty({ example: 'Matthew McConaughey, Anne Hathaway' })
  @IsString()
  @IsNotEmpty()
  elenco: string;

  @ApiProperty({ enum: Genero, example: Genero.FICCAO })
  @IsEnum(Genero)
  genero: Genero;

  @ApiProperty({ example: '2024-05-01T00:00:00.000Z' })
  @IsDateString()
  dataInicioExibicao: string;

  @ApiProperty({ example: '2024-06-01T00:00:00.000Z' })
  @IsDateString()
  dataFinalExibicao: string;

  @ApiProperty({ example: 1, description: 'ID do cinema' })
  @IsInt()
  cinemaId: number;
}
