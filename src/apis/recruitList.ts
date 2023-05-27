import { getAsync } from "./common";
import { GetRecruitListDto } from "../types/recruitList";

export const getRecruitList = async (id?: number) => {
  const url = id ? `/api/recruits?host=${id}` : '/api/recruits';
  const response = await getAsync<GetRecruitListDto, undefined>(url);
  return response;
};
