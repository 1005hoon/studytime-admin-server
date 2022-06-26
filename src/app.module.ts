import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import validationSchema from './utils/validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: validationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
