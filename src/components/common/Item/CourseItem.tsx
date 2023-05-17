import { ICourseItem } from "@/src/data/course-data";
import styled from "@emotion/styled";



export default function CourseItem({title,img,location,detail}:ICourseItem){

    const onClick=(event:React.MouseEvent<HTMLButtonElement>):void=>{
            event.preventDefault();
    };

    return(<>
        
        <CourseItemContainer onClick={onClick}>
                <div className="col-lg-12 mt-60" ></div>
                <CourseImage imgUrl={img}/>
                <div className="mt-40"></div>
                <CourseTitle>{title}</CourseTitle>
                <div className="mt-20"></div>
                <CourseItemLocation>
                    <CourseItemLocationMarker/>
                    <CourseItemLocationText>{location}</CourseItemLocationText>
                </CourseItemLocation>
                <div className="mt-20"></div>
                <CourseItemDetail>{detail}</CourseItemDetail>
        </CourseItemContainer>
        

    </>);
};

type CourseItemImageProps={
    imgUrl:string;
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
    background : url(${(props:CourseItemImageProps)=>props.imgUrl});
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    background-size : cover;
    background-position : center;
    border-radius: 10px;
`

const CourseTitle=styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    font-family: var(--font-secondary);
`

const CourseItemDetail=styled.div`
    font-weight:200;
    font-family:  var(--font-secondary);
    text-align: left;
`

const CourseItemLocationText=styled.div`  
    margin-left: 10px;
    margin-top: 20px;
    font-weight:200;
    color:var(--color-gray);
    font-family:var(--font-secondary);
`
const CourseItemLocationMarker=styled.div`
    width:23.35px;
    height:33.41px;
    content: url("./assets/img/courseItem_marker.svg");

`
const CourseItemLocation=styled.div`
    width:22.625rem;
    height:48px;
    display: flex;
    
`