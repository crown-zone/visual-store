import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpClientResponse } from './http-client-response';

@Catch()
export class HttpExceptionFilters implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const rawResponse = context.getResponse();
        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception.message || '服务器异常';

        const response = new HttpClientResponse();
        response.status = status;
        response.message = message;
        response.data = null;

        rawResponse.send(response);
    }
}
