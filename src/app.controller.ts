import { Controller, Get, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('not-found')
    getNotFound() {
        throw new NotFoundException({
            message: '找不到文章',
            data: [],
        });
    }

    @Get('error')
    getError() {
        throw new Error();
    }
}
