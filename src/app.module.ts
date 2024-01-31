import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: [Product],
      synchronize: true,
      logging: true,
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController], // MVC Model, View, Controller
  providers: [AppService], // Camada de negocios
})
export class AppModule {}
