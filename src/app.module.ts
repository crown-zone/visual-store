import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getApplicationConfig } from './config';
import { TestModule } from './test/test.module';
import { WinstonModule } from 'nest-winston-module';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: false,
            isGlobal: true,
            load: [getApplicationConfig],
        }),
        WinstonModule.forRoot({
            directory: './',
        }),
        TestModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
