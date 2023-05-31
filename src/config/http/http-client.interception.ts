import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { HttpClientResponse } from './http-client-response';

@Injectable()
export class HttpClientInterception implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data) => {
                if (data instanceof HttpClientResponse) {
                    return data;
                }

                const response = new HttpClientResponse();
                response.status = 200;
                response.message = 'success';
                response.data = data;

                return response;
            }),
        );
    }
}
