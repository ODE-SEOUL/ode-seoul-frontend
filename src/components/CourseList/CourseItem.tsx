import { ICourseItem } from "../../data/course-data";
import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";

type starProps={
    url:string,
}


export default function CourseItem({name,image,gugunSummary,description,lat,lng}:ICourseItem){


    const onClick=(event:React.MouseEvent<HTMLButtonElement>):void=>{
            event.preventDefault();
    };
    
    return(<>
        
        <CourseItemContainer>
                <div className="mt-60" ></div>
                <CourseImage imageUrl={image}>
                    <CourseStar/>
                </CourseImage>
                <div className="mt-20"></div>
                <Coursename>{name}</Coursename>
                <div className="mt-20"></div>
                <CourseItemgugunSummary>
                    <CourseItemgugunSummaryMarker/>
                    <CourseItemgugunSummaryText>{gugunSummary}</CourseItemgugunSummaryText>
                </CourseItemgugunSummary>
                <div className="mt-10"></div>
                
                <CourseItemdescription>{description.substring(0,100).concat("...")}</CourseItemdescription>
        </CourseItemContainer>
       
        

    </>);
};

type CourseItemImageProps={
    imageUrl:string;
}



const CourseItemContainer=styled.div`
    
    margin: auto !important;
    height:32.9375rem;
    width:20rem; 
    box-sizing: border-box;
    
    
`

const CourseImage=styled('div')`
    position: relative;
    height : 18rem;
    width: 20rem;
    background : url(${(props:CourseItemImageProps)=>props.imageUrl});
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    background-size : cover;
    background-position : center;
    border-radius: 10px;
    
`

const Coursename=styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    font-family: var(--font-secondary);
`

const CourseItemdescription=styled.div`
    font-weight:200;
    font-family:  var(--font-secondary);
    //text-align: left;
`

const CourseItemgugunSummaryText=styled.div`  
    margin-left: 10px;
    margin-top: 10px;
    font-weight:200;
    color:var(--color-gray);
    font-family:var(--font-secondary);
`
const CourseItemgugunSummaryMarker=styled.div`
    width:23.35px;
    height:33.41px;
    content: url("./assets/img/courseItem_marker.svg");

`
const CourseItemgugunSummary=styled.div`
    width:18rem;
    height:48px;
    display: flex;
    
`

const CourseStar=styled.div`
    position: absolute;
    top:2%;
    right:5%;;
    width:38px;
    height: 32px;
    content: url('./assets/img/course_star.svg');

`

const CourseStarFill=styled.div`
    position: absolute;
    top:2%;
    right:5%;;
    width:38px;
    height: 32px;
    content: url('./assets/img/course_star_fill.svg');
    
`;

const CourseDetailTimeMarker=styled.div`
    width:20px;
    height: 20px;
    content: url("./assets/img/courseDetailTime.svg");
`;