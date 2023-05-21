import React from "react";
import { useRouter } from "next/dist/client/router";
import Navbar from '../common/Nav/Nav';
import styled from "@emotion/styled";
import DistanceIcon from '../../../public/assets/img/courseDetailDistance.svg';
import TimeIcon from '../../../public/assets/img/courseDetailTime.svg'

export default function CourseListDetail(){
    const router=useRouter();
    const {name,distance,time,description,subway,accessway,image}=router.query;
    const mainImage:string=image as string;
    let timeText:string;
    //timeText= +time>=60? (Math.round(+time/60)).toString()+("시간")+(+time%60).toString()+"분":(time as string ).toString();
    if(+time>=60){
        timeText=(Math.round(+time/60)).toString()+("시간")+(+time%60).toString()+"분";
    }else{
        timeText=(+time).toString()+("분");
    }
    return(
        <>
            <Navbar/>
            
            
            <Container>
                <div className="mt-80" ></div>
                <CoureMainImg imageUrl={mainImage}/>
                <div className="mt-60" ></div>
                <CourseDetailTitle>{name}</CourseDetailTitle>
                <div className="mt-30" ></div>
                <CourseDetailSubContainer>
                    <CourseDetailDistanceMarker/>
                    <Spacing/>
                    
                    <CourseDetailText>{distance}</CourseDetailText>
                    <Spacing/>
                    <CourseDetailTimeMarker/>
                    <Spacing/>
                    <CourseDetailText>{timeText}</CourseDetailText>
                    <Spacing/>
                    <CourseDetailText>{subway}</CourseDetailText>
                    
                </CourseDetailSubContainer>
                <CourseDetailDescriptionContainer>
                    <CourseDetailDescriptionText>{accessway}</CourseDetailDescriptionText>
                </CourseDetailDescriptionContainer>
                <div className="mt-80" ></div>
                <BorderLine/>
                <div className="mt-150"></div>
                <CourseDetailTitle>위치를 확인해보세요!</CourseDetailTitle>
               
                
            </Container>

        </>

    );
}
type CourseMainImageProps={
    imageUrl:string;
}
const MainContainer=styled.div`
    display: grid;
    
`

const DetailContainer=styled.div`
    margin-left: 80px;
    margin-right: 80px;

`
const CommentContainer=styled.div`
    
`;
const Container=styled.div`
    margin-left: 80px;
    margin-right: 80px;
    
`
const CoureMainImg=styled.div`
    width: 50%;
    height:28rem;
    background-size: cover;
    background-image:url(${(props:CourseMainImageProps)=>props.imageUrl});
    border-radius: 10px;

`;

const CourseDetailTitle=styled.div`
    font-weight: 400;
    font-size: 40px;
    font-family: var(--font-secondary);
    
`;

const CourseDetailSubContainer=styled.div`
    width:600px;
    height:60px;
    display: flex;
    
`;

const CourseDetailText=styled.div`
    font-weight: 400;
    color:#595555;
    font-size: 20px;
    font-family: var(--font-secondary);
`
const Spacing=styled.div`
    margin-left: 20px;
`

const CourseDetailDistanceMarker=styled.div`
    width:23px;
    height: 33px;
    content: url("./assets/img/courseDetailDistance.svg");
`;

const CourseDetailTimeMarker=styled.div`
    width:20px;
    height: 20px;
    content: url("./assets/img/courseDetailTime.svg");
`;

const CourseDetailDescriptionText=styled.div`
    font-weight: 200;
    font-size: 20px;
    font-family: var(--font-secondary);
    
`;

const CourseDetailDescriptionContainer=styled.div`
    width:50%;
    
`;

const BorderLine=styled.hr`
    width:50%;
    float:left;
    color:#D9D9D9;
`
