import PostService from './service';

export interface PostData {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export default PostService;
