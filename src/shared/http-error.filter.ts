import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
@Catch()
export class HttpErrorFilter implements  ExceptionFilter{
  catch(exception: HttpException, host: ArgumentsHost): any {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorJson={
      timestamp: new Date().toISOString(),
      method:request.method,
      message:(status !== HttpStatus.INTERNAL_SERVER_ERROR)? (exception.message || null)
      : 'Internal Server Error',
    }

    if( status === HttpStatus.INTERNAL_SERVER_ERROR){
      console.error(exception);
    }

    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorJson),
      'ExceptionFilter'
    );
    response.status(status).json(errorJson);

    // response.status(status).json({
    //   statusCode: status,
    //   timestamp: new Date().toISOString(),
    //   method:request.method,
    //   message:exception.getResponse(),
    // });

  }

}
