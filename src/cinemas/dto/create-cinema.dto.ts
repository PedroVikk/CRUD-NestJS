import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCinemaDto {
  @ApiProperty({ example: 'Cinemark Shopping' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'Av. Principal, 1000 - Centro' })
  @IsString()
  @IsNotEmpty()
  endereco: string;
}
