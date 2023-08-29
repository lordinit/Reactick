import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('../../nginx/certs/1562863-cd94457.twc1.net/key.pem'),
    cert: fs.readFileSync(
      '../../nginx/certs/1562863-cd94457.twc1.net/cert.pem',
    ),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  await app.listen(3000);
}
bootstrap();
