import { getAsync } from "./common";
import { GetRecruitListDto } from "../types/recruitList";


export const getRecruitList = async () => {

  const response = await getAsync<GetRecruitListDto, undefined>(`/api/recruits`);
  return response;
};
