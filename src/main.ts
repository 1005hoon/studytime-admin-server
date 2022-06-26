import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const PORT = process.env.PORT;

  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => {
    logger.log(`Server running on port ${PORT}`);
  });
}
bootstrap();
