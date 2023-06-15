import { CreatePostInputDto } from 'src/post/domain/dto/in/createPost';

export interface IPostRepository {
  createPost(body: CreatePostInputDto): Promise<void>;
  getAllPosts();
  getOnePost(postId);
  updatePost(postId, body);
  deletePost(postId);
}

export const IPostRepository = Symbol('IPostRepository');
