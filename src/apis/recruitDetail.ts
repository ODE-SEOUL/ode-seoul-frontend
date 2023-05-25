import { getAsync } from "./common";
import { GetRecruitDetailDto } from "../types/recruitDetail";

export const getReceuitDetail = async (id: number) => {
  const response = await getAsync<GetRecruitDetailDto, undefined>(`/api/recruits/${id}`);
  return response;
};
