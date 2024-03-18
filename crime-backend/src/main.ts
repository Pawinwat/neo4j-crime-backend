import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './response/response.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('graph-api');
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableCors({
    origin: (origin, callback) => {
      // console.log('ORIGIN', origin);
      if (!origin || [].indexOf(origin) !== -1) {
        // console.log('allow');
        callback(null, true);
      } else {
        // console.log('not allow');
        callback(null, true);

        // callback(new Error('Not allowed by CORS'));
      }
    },
  });
  await app.listen(8000);
}
bootstrap();
