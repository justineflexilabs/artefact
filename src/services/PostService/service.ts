import axios from 'axios';

import { IPostData } from '.';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 60000,
});

export const PostService = {
  getAll: async function () {
    try {
      const { data } = await axiosInstance.request({
        method: 'GET',
        url: `?_limit=10`,
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
        url: `/${postId}`,
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  create: async function (post: IPostData) {
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
  update: async function (postId: number, post: IPostData) {
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
