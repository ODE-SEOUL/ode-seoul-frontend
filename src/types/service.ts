import { ResponseDto } from "./common";

export interface ServiceData{
    pageSize:number;
    pagingSize:number;
    totalPage:number;
    totalSize:number;
    events:EventData[];

}

export interface EventData{
    uuid:string;
    category:string;
    guname:string;
    title:string;
    place:string;
    useTarget:string;
    useFee:string;
    orgLink:string;
    mainImage:string;
    startDate:string;
    endDate:string;

}

export type GetServiceDto=ResponseDto<ServiceData>