import { getAsync } from "./common";
import { GetGuGunListDto } from "../types/gugunList";

export const getGugunList = async () => {
  const response = await getAsync<GetGuGunListDto, undefined>(`/locations/seoul/guguns`);
  return response;
};

