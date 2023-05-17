import { Controller, Inject } from '@nestjs/common';
import { NestWinstonLogger, WinstonProviderEnum } from 'nest-winston-module';

@Controller('test')
export class TestController {
    constructor(
        @Inject(WinstonProviderEnum.controllerProvider) private readonly logger: NestWinstonLogger
    ) {}
}
