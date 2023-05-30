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
import Loading from "../Error/Loading";

export default function CourseListDetail(){
    const router=useRouter();
    const[reviewClick,setReviewClick]=useState<boolean>(false);
    const[communityClick,setCommunityClick]=useState<boolean>(false);
    const paramId=+router.query.id;
    const {isLoading,data:courseListData}=useCourseListQuery();
    console.log(router);
    
    const courseDetailData=courseListData
    ? courseListData.find((course) => course.id === paramId)
    : undefined;
    if(isLoading){
        return (<Loading/>)
    }else{
            
            const {id,name,distance,time,description,nearSubway,accessWay,image,routes}=courseDetailData;
            console.log("routes");
            console.log(routes);
            const lat=routes[0][0][0];
            const lng=routes[0][0][1];
            

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

                    <div style={{display:"flex"}}>
                        <div className="col-lg-7 ml-40">
                            <CourseListDescription 
                                name={name} distance={distance}
                                time={timeText}  description={description} subway={nearSubway}
                                accessway={accessWay as string} image={mainImage} setCommunityClick={setCommunityClick}
                                setReviewClick={setReviewClick}/>
                            <CourseDetailMap  latitude={lat} longitude={lng} routes={routes}/>
                        </div>
                        <div className="col-lg-3 mr-20 mt-60" >
                                {
                                reviewClick? <CourseReviewWriting coursename={name as string} courseId={+paramId}/>:<CourseListReview id={+id as number} name={name as string}/>
                                }
                        </div>
                    </div>

                </>

            );

    }
    
    
    
}


type CourseMainImageProps={
    imageUrl:string;
}
// const MainContainer=styled.div`
//     display: grid;
//     grid-template-columns: 4fr 1.5fr;
//     margin-right: 80px;
//     margin-left: 80px !important;
   
// `

const MainContainer=styled.div`
    
`;

const CommentContainer=styled.div`
    //background-color: aliceblue;
    margin-right: 80px;
    margin-top: 80px;
    align-items: center;
    
`;
const Container=styled.div`
    margin-right: 80px;
    margin-left: 80px;
    align-items: center;
   
    
`;





