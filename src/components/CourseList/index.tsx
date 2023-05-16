import React from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import { useQuery } from 'react-query';
import course_data from '@/src/data/course-data';
import CourseItem from '../common/Item/CourseItem';



export default function CourseList() {

  //const {isLoading,data}=useQuery("allCourse",)
  return (
    <>

      <Navbar/>
      {course_data.map(course =>
        <CourseItem key={course.id} 
        id={course.id}
        title={course.title} 
        location={course.location}
         detail={course.detail} img={course.img}/>
        )}


    </>
  );
};


