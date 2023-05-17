import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpClientInterception } from './config/http/http-client.interception';
import { HttpExceptionFilters } from './config/http/http-exception.filters';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new HttpClientInterception());
    app.useGlobalFilters(new HttpExceptionFilters());

    await app.listen(3000);
}

bootstrap();
