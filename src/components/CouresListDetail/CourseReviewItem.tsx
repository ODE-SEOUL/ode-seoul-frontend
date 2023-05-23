import { useQuery } from "react-query";
import { getCourseUserInfo } from "@/src/apis/courseList";
import { GetCourseUserInfoParms } from "@/src/apis/courseList";
import styled from "@emotion/styled";
interface ICourseReviewItem{
    userId:number;
    score:number;
    date:string;
    content:string;
    mainImg:string;

}

function RenderStar(num:number){
    return(
        <>
        
        </>

    );
}

export default function CourseReviewItem({userId,score,date,content,mainImg}:ICourseReviewItem){
     const param:GetCourseUserInfoParms={id:userId}
     console.log(userId);

     const {isLoading,data:courseReviewUserData}=useQuery("courseListReviewUser",()=>getCourseUserInfo(param),{
        select:data=>data.result
      });
     
      

   
    return(
    <>
        
        <Container>
                <ProfileContainer>
                    <ProfileImg img={courseReviewUserData?.profileImage}/>
                    <div className="mr-20"></div>
                    <Text size={20} weight={500} color={"var(--color-black)"}>{courseReviewUserData?.nickname}</Text>

                </ProfileContainer>
                <div className="mt-20"></div>
                <ProfileContainer>
                    <Text size={10} weight={200} color={"var(--color-black)"}>{date.slice(0,10)}</Text>
                </ProfileContainer>
                <div className="mt-20"></div>
                <Text size={15} weight={200} color={"var(--color-black)"}>{content}</Text>
                <div className="mt-20"></div>
                <MainImg img={mainImg}/>
                <div className="mt-20"></div>
                <BorderLine/>
           

        </Container>
    </>);
}

type CommentProps={
    img:string;
    nickname:string;
    date:string;

}

const Container=styled.div`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 50px;
    width: 410px;
    height: 400px;
`;



const ProfileContainer=styled.div`
    display: flex;
`

const ProfileImg=styled.div<{img:string}>`
    width:30px;
    height:30px;
    content: url(${(props)=>props.img});
    border-radius: 20px;
`;
const Text=styled.div<{size:number,weight:number,color:string}>`
    font-weight: ${props=>props.weight};
    font-size: ${props=>props.size}px;
    font-family: var(--font-secondary);
    color:${props=>props.color};
    
`;
const MainImg=styled.div<{img:string}>`
    width:380px;
    height:230px;
    content: url(${(props)=>props.img});
    border-radius: 10px;
`;

const BorderLine=styled.hr`
    width:100%;
    float:left;
    color:#595555;
`