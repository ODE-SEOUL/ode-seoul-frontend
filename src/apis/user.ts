import { getAsync } from "./common";
import { GetUserInfoDto } from "../types/userInfo";

export const getUserList = async () => {
  const response = await getAsync<GetUserInfoDto, undefined>(`/api/users`);
  return response;
};
