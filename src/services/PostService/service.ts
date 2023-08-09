import { axiosInstance } from '@/lib/http';

import {
  CreatePostResponse,
  GetPostByIdResponse,
  GetPostsResponse,
  PostData,
  UpdatePostResponse,
} from '.';

const pathUrl = '/posts';

export const PostService = {
  getAll: async function (): Promise<GetPostsResponse> {
    try {
      const { data } = await axiosInstance.get(`${pathUrl}?_limit=50`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getById: async function (postId: number): Promise<GetPostByIdResponse> {
    try {
      const data = await axiosInstance.get(`${pathUrl}/${postId}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  create: async function (post: PostData): Promise<CreatePostResponse> {
    try {
      const { data } = await axiosInstance.post(pathUrl, post);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  update: async function (
    postId: number,
    post: PostData
  ): Promise<UpdatePostResponse> {
    try {
      const { data } = await axiosInstance.put(`/api/v1/users/${postId}`, post);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default PostService;
