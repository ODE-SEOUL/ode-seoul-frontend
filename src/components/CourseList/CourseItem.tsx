import { ICourseItem } from "@/src/types/courseList";
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
        
                 <div className="mt-20" ></div>
                <CourseImage imageUrl={image}/>
                
                <div className="mt-20"></div>
                
                <Coursename>{name}</Coursename>
                <div className="mt-10"></div>
                <CourseItemgugunSummary>
                    <CourseItemgugunSummaryMarker/>
                    <CourseItemgugunSummaryText>{gugunSummary}</CourseItemgugunSummaryText>
                </CourseItemgugunSummary>
                <div className="mt-5"></div>
                
                <CourseItemdescription>{description.substring(0,50).concat("...")}</CourseItemdescription>
       
        

    </>);
};

type CourseItemImageProps={
    imageUrl:string;
}





const CourseImage=styled('div')`
    position: relative;
    height : 20rem;
    width: 100%;
    background : url(${(props:CourseItemImageProps)=>props.imageUrl});
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    background-size : cover;
    background-position : center;
    border-radius: 5px;
    
`

const Coursename=styled.div`
    //text-align: center;
    font-weight: 500;
    font-size: 20px;
    font-family: var(--font-secondary);
`

const CourseItemdescription=styled.div`
    font-weight:200;
    font-family:  var(--font-secondary);
    //text-align: left;
`

const CourseItemgugunSummaryText=styled.div`  
    margin-left: 8px;
    margin-top: 5px;
    font-weight:600;
    color:var(--color-gray);
    font-family:var(--font-secondary);
`
const CourseItemgugunSummaryMarker=styled.div`
    width:18px;
    height:25px;
    content: url("./assets/img/courseItem_marker.svg");

`
const CourseItemgugunSummary=styled.div`
    width:100%;
    height:32px;
    display: flex;
    
`


const CourseDetailTimeMarker=styled.div`
    width:20px;
    height: 20px;
    content: url("./assets/img/courseDetailTime.svg");
`;