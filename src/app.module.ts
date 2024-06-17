import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AppMiddleware } from './app.middleware';
import { ConfigModule } from '@nestjs/config';
import { applicationConfig } from './config/application.config';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'abc',
      signOptions: { expiresIn: '60s' },
    }),
    ConfigModule.forRoot({
      load: [applicationConfig],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes('*');
  }
}
