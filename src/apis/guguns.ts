import { getAsync } from "./common";
import { GetGuGunListDto } from "../types/gugunList";

export const getGugunList = async () => {
  const response = await getAsync<GetGuGunListDto, undefined>(`/api/locations/seoul/guguns`);
  return response;
};

