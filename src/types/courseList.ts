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

export interface ICourseItem {
    id:number;
    image:string;
    name:string;
    gugunSummary:string;
    description:string;
    lat:number;
    lng:number;
    routes:any;  
  };

  export interface ICourseDetail{
        id:number;
        name:string;
        distance:string;
        time:string;
        description:string;
        nearSubway:string;
        accessWay:string;
        image:string;
        routes:any;
        lng:number;
        lat:number;
  }

export interface ICourseCommentData{
    id:number;
    courseId:number;
    userId:number;
    score:number;
    content:string;
    image:string;
    createdAt:string;
}

export interface ICourseUserData{
    id:number;
    nickname:string;
    profileImage:string|"";
    locationCode:string;
    signupStatus:string;

}

export interface ICourseReview{

    courseId:number;
    score:number;
    content:string;
    image:string;

}

export type GetCourseListDto=ResponseDto<ICourseData[]>;

export type GetCommentListDto=ResponseDto<ICourseCommentData[]>;

export type GetCourseUserDto=ResponseDto<ICourseUserData>;

export type PostCourseReviewResponseDto=ResponseDto<ICourseReview>;

