import { ResponseDto } from "./common";

export interface IRecruitListData {
  page: number;
  pageSize: number;
  pagingSize: number;
  totalPage: number;
  totalSize: number;
  recruits: RecruitItem[];
}

export interface RecruitItem {
    id: number;
    host : HostItem[];
    courseId: number;
    category: string;
    title: string;
    content:string;
    image:string;
    currentPeople: number;
    maxPeople: number;
    scheduledAt: string;
    progressStatus: string;
    createdAt: string;
}

export interface HostItem {
    id: number;
    nickname: string;
    profileImage: string;
    locationCode: string;
    signupStatus: string;
  }
  
export type GetRecruitListDto = ResponseDto<IRecruitListData>;
