import { axiosInstance } from '@/lib/http';

import {
  CreateUserResponse,
  GetUserByIdResponse,
  GetUsersResponse,
  UpdateUserResponse,
  UserData,
} from '.';

const pathUrl = '/users';

export const UserService = {
  getAll: async function (): Promise<GetUsersResponse> {
    try {
      const { data } = await axiosInstance.get(`${pathUrl}?_limit=10`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getById: async function (userId: number): Promise<GetUserByIdResponse> {
    try {
      const { data } = await axiosInstance.get(`${pathUrl}/${userId}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  create: async function (user: UserData): Promise<CreateUserResponse> {
    try {
      const response = await axiosInstance.post(`/api/v1/users`, user);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  update: async function (
    userId: number,
    user: UserData
  ): Promise<UpdateUserResponse> {
    try {
      const response = await axiosInstance.put(`/api/v1/users/${userId}`, user);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default UserService;
