import { CreatePostInputDto } from 'src/post/domain/dto/in/createPost';

export interface IPostService {
  createPost(body: CreatePostInputDto): Promise<void>;
  getAllPosts();
  getOnePost(postId);
  updatePost(postId, body);
  deletePost(postId);
}

export const IPostService = Symbol('IPostService');
