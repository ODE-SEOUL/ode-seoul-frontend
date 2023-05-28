import { ResponseDto } from "./common";

export interface IRecruitDetailData{
    id:number;
    host: IHostData;
    courseId:number;
    category: string;
    title: string;
    content: string;
    image: string;
    currentPeople:number;
    maxPeoPle:number;
    scheduledAt:string;
    progressStatus: string;
    createdAt: string;
    comments: string[];
    applications: string[];
}

export interface IHostData{
    id:number;
    nickname:string;
    profileImage:string|"";
    locationCode:string;
    signupStatus:string;
}

export type GetRecruitDetailDto=ResponseDto<IRecruitDetailData>;

export type GetHostDto=ResponseDto<IHostData>;