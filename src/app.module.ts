import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CinemasModule } from './cinemas/cinemas.module';
import { SalasModule } from './salas/salas.module';
import { FilmesModule } from './filmes/filmes.module';
import { SessoesModule } from './sessoes/sessoes.module';
import { IngressosModule } from './ingressos/ingressos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { LancheCombosModule } from './lanche-combos/lanche-combos.module';

@Module({
  imports: [
    UsersModule,
    CinemasModule,
    SalasModule,
    FilmesModule,
    SessoesModule,
    IngressosModule,
    PedidosModule,
    LancheCombosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
