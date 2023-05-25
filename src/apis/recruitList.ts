import { getAsync } from "./common";
import { GetRecruitListDto } from "../types/recruitList";

<<<<<<< HEAD
export const getReceuitList = async () => {
=======
export const getRecruitList = async () => {
>>>>>>> dbcca9eb0c9efaa8db29bc9ce1cb03b51febc3b5
  const response = await getAsync<GetRecruitListDto, undefined>(`/api/recruits`);
  return response;
};
