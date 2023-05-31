import { useQuery } from "react-query";
import { GetServiceSearchParams, getServiceSearchList } from "@/src/apis/service";


export const useServiceSearchQuery = (searchParams:string) => {
    return useQuery(["searchServiceList", searchParams],()=>getServiceSearchList(searchParams),{
        select:(data)=>data.result.events
    });
  };