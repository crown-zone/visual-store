import { Controller, Get } from '@nestjs/common';
import { HttpClientResponse } from '../config/http/http-client-response';
import { delay, Observable, of } from 'rxjs';

@Controller('setting')
export class SettingController {
    @Get('list')
    getList() {
        return [0, 1, 2, 3];
    }

    @Get('platform')
    getPlatform() {
        return 'web';
    }

    @Get('path')
    getPath() {
        const response = new HttpClientResponse();

        response.status = 200;
        response.message = '获取成功';
        response.data = {
            a: '/a',
            b: '/b',
        };

        return response;
    }

    @Get('timeout')
    timeout(): Observable<any> {
        return of('abc').pipe(delay(5000));
    }
}
