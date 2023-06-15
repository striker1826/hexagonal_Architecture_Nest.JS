import { Inject, Injectable } from '@nestjs/common';
import { IPostService } from '../port/inboundPorts/post.IService';
import { IPostRepository } from '../port/outboundPorts/post.IRepository';
import { CreatePostInputDto } from './dto/in/createPost';

@Injectable()
export class PostService implements IPostService {
  constructor(
    @Inject(IPostRepository) private postRepository: IPostRepository,
  ) {}

  createPost(body: CreatePostInputDto): Promise<void> {
    this.postRepository.createPost(body);
    return;
  }

  getAllPosts() {
    const allPosts = this.postRepository.getAllPosts();
    return allPosts;
  }

  getOnePost(postId) {
    const post = this.postRepository.getOnePost(postId);
    return post;
  }

  updatePost(postId, body) {
    this.postRepository.updatePost(postId, body);
    return;
  }

  deletePost(postId) {
    this.postRepository.deletePost(postId);
    return;
  }
}
