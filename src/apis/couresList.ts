import { getAsync } from "./common";
import { GetCourseListDto } from "../types/courseList";

export const getCourseList=async()=>{
    const response=await getAsync<GetCourseListDto,undefined>(
        '/courses',
    );
    return response;

}