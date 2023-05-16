import { ICourseItem } from "@/src/data/course-data";
import Image from "next/image";
import styled from "@emotion/styled";



export default function CourseItem({title,img,location,detail}:ICourseItem){

    return(<>
        
        <CourseItemBox>
            <CourseImage imgUrl={img}/>
            <CourseTitle>{title}</CourseTitle>
            <div className="mt-40"></div>
            <span>{location}</span>
            <div className="mt-30"></div>
            <span>{detail}</span>
        </CourseItemBox>
        

    </>);
};

type CourseItemImageProps={
    imgUrl:string;
}

const CourseItemBox=styled.div`
    
`;

const CourseImage=styled('div')`
    height : 300px;
    background-image : ${(props:CourseItemImageProps)=>props.imgUrl};

    background-size : cover;
    background-position : center;
`

const CourseTitle=styled.div`
    font-family: var(--font-secondary);
`