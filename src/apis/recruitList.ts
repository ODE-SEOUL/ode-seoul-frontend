import { getAsync } from "./common";
import { GetRecruitListDto } from "../types/recruitList";

export const getReceuitList = async () => {
  const response = await getAsync<GetRecruitListDto, undefined>(`/recruits`);
  return response;
};
