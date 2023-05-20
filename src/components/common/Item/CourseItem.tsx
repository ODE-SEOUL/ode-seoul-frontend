import { ICourseItem } from "../../../data/course-data";
import styled from "@emotion/styled";
import React from "react";



export default function CourseItem({name,image,gugunSummary,description}:ICourseItem){

    const onClick=(event:React.MouseEvent<HTMLButtonElement>):void=>{
            event.preventDefault();
    };

    return(<>
        
        <CourseItemContainer onClick={onClick}>
                <div className="col-lg-12 mt-60" ></div>
                <CourseImage imageUrl={image}/>
                <div className="mt-40"></div>
                <Coursename>{name}</Coursename>
                <div className="mt-20"></div>
                <CourseItemgugunSummary>
                    <CourseItemgugunSummaryMarker/>
                    <CourseItemgugunSummaryText>{gugunSummary}</CourseItemgugunSummaryText>
                </CourseItemgugunSummary>
                <div className="mt-20"></div>
                <CourseItemdescription>{description.substring(0,100).concat("...")}</CourseItemdescription>
        </CourseItemContainer>
        

    </>);
};

type CourseItemImageProps={
    imageUrl:string;
}



const CourseItemContainer=styled.button`
    border:0;
    outline:0;
    background-color: transparent;
    margin: 1.25rem;
    height:32.9375rem;
    width:22rem; 
    box-sizing: border-box;
    
`

const CourseImage=styled('div')`
    height : 19.875rem;
    width: 22.625rem;
    background : url(${(props:CourseItemImageProps)=>props.imageUrl});
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    background-size : cover;
    background-position : center;
    border-radius: 10px;
`

const Coursename=styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    font-family: var(--font-secondary);
`

const CourseItemdescription=styled.div`
    font-weight:200;
    font-family:  var(--font-secondary);
    text-align: left;
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
    width:22.625rem;
    height:48px;
    display: flex;
    
`