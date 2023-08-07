import { axiosInstance } from '@/lib/http';

import { UserData } from '.';

const pathUrl = '/users';

export const UserService = {
  getAll: async function () {
    try {
      const { data } = await axiosInstance.request({
        method: 'GET',
        url: `${pathUrl}?_limit=10`,
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getById: async function (userId: number) {
    try {
      const { data } = await axiosInstance.request({
        method: 'GET',
        url: `/${userId}`,
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  create: async function (user: UserData) {
    try {
      const response = await axiosInstance.request({
        method: 'POST',
        url: `/api/v1/users`,
        data: user,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  update: async function (userId: number, user: UserData) {
    try {
      const response = await axiosInstance.request({
        method: 'PUT',
        url: `/api/v1/users/${userId}`,
        data: user,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default UserService;
