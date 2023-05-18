import React from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import { useQuery } from 'react-query';
import course_data from '@/src/data/course-data';
import CourseItem from '../common/Item/CourseItem';
import styled from '@emotion/styled';
import CourseCarousel from '../common/Carousel/Course';
import { ICourseData, couresRecommendation } from './api';


export default function CourseList() {

  const {isLoading:courseLoading,data:courseData}=useQuery<ICourseData[]>("allCourse",couresRecommendation);

  return (
    <>

      <Navbar/>
      <div className='mt-35'></div>
      <CourseCategoryBarContainer>
        <CourseCarousel/>
      </CourseCategoryBarContainer>
      <CourseListContainer>
      {courseData?.map(course =>
        <CourseItem key={course.id} 
        id={course.id}
        title={course.name} 
        location={course.gugunSummary}
         detail={course.description} img={course.image}/>
        )}
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