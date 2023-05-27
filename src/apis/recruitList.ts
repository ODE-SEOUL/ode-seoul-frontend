import { getAsync } from "./common";
import { GetRecruitListDto } from "../types/recruitList";

export const getRecruitList = async (id?: number) => {
  const url = id ? `/recruits?host=${id}` : '/recruits';
  const response = await getAsync<GetRecruitListDto, undefined>(url);
  return response;
};
