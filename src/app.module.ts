import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getApplicationConfig } from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: false,
            isGlobal: true,
            load: [getApplicationConfig],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
