import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import {Request} from 'express';
import { tap } from 'rxjs/operators';



@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const  req = context.switchToHttp().getRequest<Request>();
    const method = req.method;
    const url = req.url;
    const  now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() => Logger.log(`${url} ${Date.now()-now}ms`,context.getClass().name)),
      );
  }
}
