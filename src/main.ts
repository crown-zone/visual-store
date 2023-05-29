import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpClientInterception } from './config/http/http-client.interception';
import { HttpExceptionFilters } from './config/http/http-exception.filters';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new HttpClientInterception());
    app.useGlobalFilters(new HttpExceptionFilters());

    const config = new DocumentBuilder()
        .setTitle('visual-store')
        .setDescription('visual-store项目的API使用文档')
        .setVersion('1.0.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}

bootstrap();
