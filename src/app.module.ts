import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentsController } from './shipments/shipments.controller';
import { ShipmentsService } from './shipments/shipments.service';
import { ShipmentsModule } from './shipments/shipments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ShipmentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'pruebaBackendNest',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, ShipmentsController],
  providers: [AppService, ShipmentsService],
})
export class AppModule {}
