import { Injectable } from '@nestjs/common';
import { Post } from 'src/entities/post.entity';
import { CreatePostInputDto } from 'src/post/domain/dto/in/createPost';
import { IPostRepository } from 'src/post/port/outboundPorts/post.IRepository';

@Injectable()
export class PostRepository implements IPostRepository {
  private post: Post[] = [];

  createPost(body: CreatePostInputDto): Promise<void> {
    this.post.push({
      id: this.post.length + 1,
      ...body,
    });
    return;
  }

  getAllPosts() {
    return this.post;
  }

  getOnePost(postId) {
    const post = this.post.find((post) => post.id == postId);
    return post;
  }

  updatePost(postId, body) {
    const { title, content } = body;
    const post = this.post.find((post) => post.id == postId);
    post.title = title;
    post.content = content;
    return;
  }

  deletePost(postId: any) {
    this.post = this.post.filter((post) => post.id != postId);
  }
}
