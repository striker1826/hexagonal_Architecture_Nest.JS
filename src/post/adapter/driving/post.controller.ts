import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostInputDto } from 'src/post/domain/dto/in/createPost';
import { IPostService } from 'src/post/port/inboundPorts/post.IService';

@Controller('post')
export class PostController {
  constructor(@Inject(IPostService) private postService: IPostService) {}

  @Post()
  createPost(@Body() body: CreatePostInputDto) {
    this.postService.createPost(body);
  }

  @Get()
  getAllPost() {
    const allPosts = this.postService.getAllPosts();
    return allPosts;
  }

  @Get('/:postId')
  getOnePost(@Param('postId') postId: number) {
    const post = this.postService.getOnePost(postId);
    return post;
  }

  @Put('/:postId')
  updatePost(@Param('postId') postId: number, @Body() body) {
    this.postService.updatePost(postId, body);
    return;
  }

  @Delete('/:postId')
  deletePost(@Param('postId') postId: number) {
    this.postService.deletePost(postId);
    return;
  }
}
