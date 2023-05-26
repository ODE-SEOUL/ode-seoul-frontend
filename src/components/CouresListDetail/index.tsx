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
import { useQueryClient } from "react-query";
import { getCourseDetail, getCourseList } from "@/src/apis/courseList";

import { useQuery } from "react-query";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

import { GetServerSideProps,NextPageContext } from "next";

import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import { courseDetailAtom } from "@/src/states/CourseAtom";
import { ICourseDetail } from "@/src/types/courseList";

interface IDetailProps{
    id:number;
}

export default function CourseListDetail(){
    const router=useRouter();
    const paramId=+router.query.id;
    const [data,setData]=useRecoilState(courseDetailAtom);
    console.log(router.query);
    
    // const { data: courseData } = useQuery(["detailCourseData"],getCourseList,{
    //     select:(data)=>data.result.filter((item)=>+item.id===paramId)[0]
    // });
    // setData(courseData);
   

    
    const {id,name,distance,time,description,nearSubway,accessWay,image,routes,lng,lat}=router.query;
   
    const props:ICourseDetail={
        id:paramId,
        name:name as string,
        distance:distance as string,
        time:time as string,
        description:description as string,
        accessWay:accessWay as string,
        image:image as string,
        routes:routes,
        lng:+lng,
        lat:+lat,
        nearSubway:nearSubway as string,



    }
    ;
    const[reviewClick,setReviewClick]=useState<boolean>(false);
    const[communityClick,setCommunityClick]=useState<boolean>(false);

    const mainImage:string=image as string;

    
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
                    time={timeText}  description={description as string} subway={nearSubway as string}
                    accessway={accessWay as string} image={mainImage} setCommunityClick={setCommunityClick}
                    setReviewClick={setReviewClick}
                    />
                    <CourseDetailMap  latitude={+lng} longitude={+lat} routes={routes as string}/>
                </Container>
                <CommentContainer>
                    {
                        reviewClick? <CourseReviewWriting coursename={name as string} courseId={+paramId}/>:<CourseListReview id={+id as number} name={name as string}/>
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





