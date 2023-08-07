import { axiosInstance } from '@/lib/http';

import { PostData } from '.';

const pathUrl = '/posts';

export const PostService = {
  getAll: async function () {
    try {
      const { data } = await axiosInstance.request({
        method: 'GET',
        url: `${pathUrl}?_limit=50`,
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getById: async function (postId: number) {
    try {
      const { data } = await axiosInstance.request({
        method: 'GET',
        url: `${pathUrl}/${postId}`,
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  create: async function (post: PostData) {
    try {
      const response = await axiosInstance.request({
        method: 'POST',
        url: `/api/v1/users`,
        data: post,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  update: async function (postId: number, post: PostData) {
    try {
      const response = await axiosInstance.request({
        method: 'PUT',
        url: `/api/v1/users/${postId}`,
        data: post,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default PostService;
