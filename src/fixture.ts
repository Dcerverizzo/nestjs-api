import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert({
    id: '7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k',
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
    image_url: 'https://example.com/image1.jpg',
  });
  await app.close();
}
bootstrap();
