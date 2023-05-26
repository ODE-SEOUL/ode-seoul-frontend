import { GetServiceDto } from "../types/service";
import { getAsync } from "./common";


export interface GetServiceParams{
    gugun:string;
    category:string;
}

export interface GetServiceSearchParams{
    title:string;
}

export const getServiceList = async () => {

    const response = await getAsync<GetServiceDto, undefined>(`/events`);
    return response;
  };

export const getServiceFilterList=async () => {

    const response = await getAsync<GetServiceDto, undefined>(`/events`);
    return response;
  };

export const getServiceSearchList=async(title:string)=>{
    const response=await getAsync<GetServiceDto,undefined>(`/events?title=${title}`);
    return response;
}
  