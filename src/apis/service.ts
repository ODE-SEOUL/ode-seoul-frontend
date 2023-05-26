import { GetServiceDto } from "../types/service";
import { getAsync } from "./common";


interface GetServiceParams{
    gugun:string;
    category:string;
}

interface GetServiceSearchParams{
    title:string;
}

export const getServiceList = async () => {

    const response = await getAsync<GetServiceDto, undefined>(`/api/events`);
    return response;
  };


export const getServiceSearchList=async({
    title
}:GetServiceSearchParams)=>{
    const response=await getAsync<GetServiceDto,undefined>(`/api/events?title=${title}`)
}
  