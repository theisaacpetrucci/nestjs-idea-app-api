import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaModule } from './idea/idea.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    IdeaModule,
    UserModule,
    CommentModule],
  controllers: [AppController],
  providers: [AppService,{
    provide:APP_FILTER,
    useClass:HttpErrorFilter,
  },{
    provide:APP_INTERCEPTOR,
    useClass: LoggingInterceptor
  }],
})
export class AppModule {}
