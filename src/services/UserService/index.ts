import UserService from './service';

export interface UserData {
  userId: number;
  name: string;
}

export interface CreateUserResponse {
  data: UserData;
}

export interface GetUsersResponse {
  data: UserData[];
}

export interface GetUserByIdResponse {
  data: UserData;
}

export interface UpdateUserResponse {
  data: UserData;
}

export default UserService;
