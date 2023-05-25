import { getAsync } from "./common";
import { GetCourseListDto ,GetCommentListDto, GetCourseUserDto} from "../types/courseList";

export interface GetCourseListCommentParams{
    type:string;
    value:number;

}

export interface GetCourseUserInfoParms{
    id:number;
}

const DEFAULT_SIZE=10;

export const getCourseList=async()=>{
    const response=await getAsync<GetCourseListDto,undefined>(
        '/api/courses',
    );
    return response;

}

export const getCourseListComment=async({
    type,
    value
}:GetCourseListCommentParams)=>{
    const response=await getAsync<GetCommentListDto,undefined>(
        `/api/courses/reviews?type=${type}&value=${value.toString()}`
    );
    return response;
}

export const getCourseUserInfo=async({
    id
}:GetCourseUserInfoParms)=>{
    const response= await getAsync<GetCourseUserDto,undefined>(
        `/users/${id}`
    );
    return response;

}