import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LancheCombosService } from './lanche-combos.service';
import { LancheCombosController } from './lanche-combos.controller';

@Module({
  imports: [PrismaModule],
  controllers: [LancheCombosController],
  providers: [LancheCombosService],
})
export class LancheCombosModule {}
