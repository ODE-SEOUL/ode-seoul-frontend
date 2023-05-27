import { getAsync, postAsync } from "./common";
import { GetCourseListDto ,GetCommentListDto, GetCourseUserDto, PostCourseReviewResponseDto, ICourseReview} from "../types/courseList";

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
        '/courses',
    );
    return response;

}

export const getCourseDetail=async(id:number)=>{
    const response=await getAsync<GetCourseListDto,undefined>(
        '/courses',
    );
    const target=response.result.filter(item=>item.id===id);
    return target;
}

export const getCourseListComment=async({
    type,
    value
}:GetCourseListCommentParams)=>{
    const response=await getAsync<GetCommentListDto,undefined>(
        `/courses/reviews?type=${type}&value=${value.toString()}`
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
/*
@param T 서버 응답 타입
* @param D parameter 또는 body로 전달할 데이터의 타입
*/
export const postCourseReview=async(accessToken:string,info:ICourseReview)=>{

    const response= await postAsync<PostCourseReviewResponseDto,ICourseReview>(
       `/courses/reviews`,
       info,
        {
            headers:{
                "Authorization": `Bearer ${accessToken}`,

            }
        },

    
    );
    return response;
}


