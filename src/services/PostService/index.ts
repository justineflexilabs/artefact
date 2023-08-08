import PostService from './service';

export interface PostData {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export interface CreatePostResponse {
  data: PostData;
}

export interface GetPostsResponse {
  data: PostData[];
}

export interface GetPostByIdResponse {
  data: PostData;
}

export interface UpdatePostResponse {
  data: PostData;
}

export default PostService;
