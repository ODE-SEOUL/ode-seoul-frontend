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
<<<<<<< HEAD
        `/api/users/${id}`
=======
        `/api//users/${id}`
>>>>>>> dbcca9eb0c9efaa8db29bc9ce1cb03b51febc3b5
    );
    return response;

}
/*
@param T 서버 응답 타입
* @param D parameter 또는 body로 전달할 데이터의 타입
*/
export const postCourseReview=async(accessToken:string,info:ICourseReview)=>{

    const response= await postAsync<PostCourseReviewResponseDto,ICourseReview>(
       `/api/courses/reviews`,
       info,
        {
            headers:{
                "Authorization": `Bearer ${accessToken}`,

            }
        },

    
    );
    return response;
}