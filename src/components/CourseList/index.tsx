import React, { use } from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import CourseCarousel from '../common/Carousel/Course';
import { GetCourseListDto} from '@/src/types/courseList';
import { getCourseList } from '@/src/apis/couresList';
import CourseItem from '../common/Item/CourseItem';
import axios from 'axios';



export default function CourseList() {
  
 
  const {isLoading,data:courseData}=useQuery("courseList",getCourseList,{
    select:data=>data?.result
  });
  
  

  return (
    <>

      <Navbar/>
      <div className='mt-35'></div>
      <CourseCategoryBarContainer>
        <CourseCarousel/>
      </CourseCategoryBarContainer>
      <CourseListContainer>
        {
          courseData?.slice(0,9).map(course=>
            <CourseItem 
            key={course.id} 
            id={course.id}
            name={course.name}
            image={course.image}
            gugunSummary={course.gugunSummary}
            description={course.description}

             />
            )
        }
       
      </CourseListContainer>


    </>
  );
};

const Container=styled.div`
  
`;

const CourseCategoryBarContainer=styled.div`
  margin-top: 4rem;
  
`;
const CourseListContainer=styled.div`
  margin-top:2rem;
  margin-left: 5.2rem;
  margin-right: 5.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr)

  
`;