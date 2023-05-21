import { ResponseDto } from "./common";

export interface ICourseData{
    id:number;
    name:string;
    level:number;
    distance:number;
    time:number;
    description:string;
    categories:string[];
    gugunSummary:string;
    routeSummary:string;
    nearSubway:string;
    accessWay:string;
    region:string;
    image:string;
    distanceFromSearchLocation:number;
    routes:any;
}

export type GetCourseListDto=ResponseDto<ICourseData[]>;