import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { getApplicationConfig } from './config';
import {
    appOptions,
    consoleOptions,
    controllerOptions,
    coreOptions,
    resolverOptions,
    serviceOptions,
    WinstonModule,
} from 'nest-winston-module';
import { SettingModule } from './setting/setting.module';
import { ScheduleModule } from "@nestjs/schedule";

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: false,
            isGlobal: true,
            load: [getApplicationConfig],
        }),
        WinstonModule.forRoot({
            core: coreOptions,
            app: appOptions,
            resolver: resolverOptions,
            controller: controllerOptions,
            service: serviceOptions,
            console: consoleOptions,
            directory: './',
        }),
        ScheduleModule.forRoot(),
        SettingModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
