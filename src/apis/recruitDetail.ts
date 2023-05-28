import { getAsync } from "./common";
import { GetRecruitDetailDto } from "../types/recruitDetail";

export const getRecruitDetail = async (id: number) => {
  const response = await getAsync<GetRecruitDetailDto, undefined>(
    `/recruits/${id}`);
  return response;
};
