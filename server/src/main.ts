import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const domain = '1562863-cd94457.twc1.net';
  const httpsOptions = {
    key: fs.readFileSync(`../../nginx/certs/${domain}/key.pem`),
    cert: fs.readFileSync(`../../nginx/certs/${domain}/cert.pem`),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  await app.listen(8080);
}
bootstrap();
