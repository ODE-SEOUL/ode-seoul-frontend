import React from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import { useQuery } from 'react-query';
import course_data from '@/src/data/course-data';
import CourseItem from '../common/Item/CourseItem';
import styled from '@emotion/styled';
import CourseCarousel from '../common/Carousel/Course';


export default function CourseList() {

  //const {isLoading,data}=useQuery("allCourse",)
  return (
    <>

      <Navbar/>
      <div className='mt-35'></div>
      <CourseCategoryBarContainer>
        <CourseCarousel/>
      </CourseCategoryBarContainer>
      <CourseListContainer>
      {course_data.map(course =>
        <CourseItem key={course.id} 
        id={course.id}
        title={course.title} 
        location={course.location}
         detail={course.detail} img={course.img}/>
        )}
      </CourseListContainer>


    </>
  );
};

const Container=styled.div`
  
`;

const CourseCategoryBarContainer=styled.div`
  margin-top: 4rem;
  margin-left:6rem;
  
`;
const CourseCategoryWindow=styled.div`
  background: coral;
  width: 63.25rem;
  height:3.5rem;
  
  overflow: hidden;
`

const CourseListContainer=styled.div`
  margin: 2rem 5.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr)

  
`;