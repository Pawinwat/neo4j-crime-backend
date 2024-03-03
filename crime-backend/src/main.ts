import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './response/response.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('graph-api');
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(8000);
}
bootstrap();
