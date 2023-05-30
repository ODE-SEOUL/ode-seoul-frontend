import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { GetCourseListCommentParams, getCourseListComment } from "@/src/apis/courseList";
import CourseReviewItem from "./CourseReviewItem";
interface ICourseListProps{
    id:number;
    name:string;
}



export default function CourseListReview({id,name}:ICourseListProps){

    const param:GetCourseListCommentParams={type:"course",value:id};

    const type:string="course";

    const {isLoading,data:courseReviewData}=useQuery("courseListReview",()=>getCourseListComment(param),{
        select:data=>data.result
      });
    
     
    return(<>
        <CourseText size={25} weight={500} color={"var(--color-black)"}>{name}의 후기를 만나보세요!</CourseText>
        <div className="mt-40"></div>
        <FlexBox>
            <CourseText size={20} weight={500} color={"var(--color-black)"}>리뷰</CourseText>
            <div className="ml-20"></div>
            <CourseText size={20} weight={500} color={"rgb(108, 128, 75)"}>{courseReviewData?.length}</CourseText>
        </FlexBox>
        <div className="mt-30"></div>
        <CommentContainer>
            
            {courseReviewData?.map((item)=>
                <CourseReviewItem key={item.id} userId={item.userId} score={item.score}
                date={item.createdAt} content={item.content} mainImg={item.image}/>
            )}

        </CommentContainer>

    </>);

};
const CourseText=styled.div<{size:number,weight:number,color:string}>`
    font-weight: ${props=>props.weight};
    font-size: ${props=>props.size}px;
    font-family: var(--font-secondary);
    color:${props=>props.color};
    
`;

const FlexBox=styled.div`
    display: flex;
`

const CommentContainer=styled.div`
    //background-color: #F9F9F9;
    width:35rem;
    /* height: 1300px;
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 10px; */
`;
