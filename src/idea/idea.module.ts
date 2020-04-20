import { Module } from '@nestjs/common';
import { IdeaController } from './idea.controller';
import { IdeaService } from './idea.service';
import { IdeaEntity } from './idea.entity';
import { UserEntity } from '../user/user.entity';
import { CommentService } from '../comment/comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from '../comment/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [IdeaEntity,
        UserEntity,
        CommentEntity])],
  controllers: [IdeaController],
  providers: [IdeaService,CommentService]
})
export class IdeaModule {}
