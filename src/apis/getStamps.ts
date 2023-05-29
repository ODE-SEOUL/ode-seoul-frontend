import { getAsync } from "./common";
import { GetIStampDataDto } from "../types/stamps";

//유저 아이디
export const getStamps = async (id?: number) => {
  const url = `/users/${id}/stamps`
  const response = await getAsync<GetIStampDataDto, undefined>(url);
  return response;
};
