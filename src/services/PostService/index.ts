import PostService from './service';

export interface IPostData {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export default PostService;
