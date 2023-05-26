import React from "react";
import { useRouter } from "next/dist/client/router";
import Navbar from '../common/Nav/Nav';
import styled from "@emotion/styled";
import DistanceIcon from '../../../public/assets/img/courseDetailDistance.svg';
import TimeIcon from '../../../public/assets/img/courseDetailTime.svg'
import CourseListDescription from "./CourseListDescription";
import CourseDetailMap from "./Map";
import { useState } from "react";
import { useRecoilState } from "recoil";
import CourseListReview from "./CourseListReview";
import CourseReviewWriting from "./CourseReviewWriting";

import { useCourseListQuery } from "../CourseList/courseListQuery";
export default function CourseListDetail(){
    const router=useRouter();
    //const { data: courseData } = useCourseListQuery();
    const {id,name,distance,time,description,subway,accessway,image,lat,lng,routes}=router.query;
    const[reviewClick,setReviewClick]=useState<boolean>(false);
    const[communityClick,setCommunityClick]=useState<boolean>(false);

    const mainImage:string=image as string;

    console.log(routes);
    
    let timeText:string;
    //timeText= +time>=60? (Math.round(+time/60)).toString()+("시간")+(+time%60).toString()+"분":(time as string ).toString();
    if(+time%60>=1 && +time%60!=0){
        timeText=(Math.round(+time/60)).toString()+("시간 ")+(+time%60).toString()+"분";
    }
    if(+time%60>=1 && +time%60==0){
        timeText=(Math.round(+time/60)).toString()+("시간");
    }else if(+time%60<1){
        timeText=(+time).toString()+(" 분");
    }


    return(
        <>
            <Navbar/>
            <MainContainer>
                <Container>
                    <CourseListDescription name={name as string} distance={distance as string}
                    time={timeText}  description={description as string} subway={subway as string}
                    accessway={accessway as string} image={mainImage} setCommunityClick={setCommunityClick}
                    setReviewClick={setReviewClick}
                    />
                    <CourseDetailMap  latitude={+lat} longitude={+lng} routes={routes as string}/>
                </Container>
                <CommentContainer>
                    {
                        reviewClick? <CourseReviewWriting coursename={name as string} courseId={+id}/>:<CourseListReview id={+id as number} name={name as string}/>
                    }
                </CommentContainer>
            </MainContainer>

        </>

    );
}


type CourseMainImageProps={
    imageUrl:string;
}
const MainContainer=styled.div`
    display: grid;
    grid-template-columns: 4fr 1.5fr;
    margin-right: 80px;
    margin-left: 80px !important;
   
`

const CommentContainer=styled.div`
    //background-color: aliceblue;
    margin-right: 80px;
    margin-top: 80px;
    align-items: center;
    
`;
const Container=styled.div`
    margin-left: 80px;
    align-items: center;
   
    
`;





