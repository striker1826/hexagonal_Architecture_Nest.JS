import { Module } from '@nestjs/common';
import { PostRepository } from './adapter/driven/post.repository';
import { PostController } from './adapter/driving/post.controller';
import { PostService } from './domain/post.service';
import { IPostService } from './port/inboundPorts/post.IService';
import { IPostRepository } from './port/outboundPorts/post.IRepository';

@Module({
  controllers: [PostController],
  providers: [
    { provide: IPostService, useClass: PostService },
    { provide: IPostRepository, useClass: PostRepository },
  ],
})
export class PostModule {}
