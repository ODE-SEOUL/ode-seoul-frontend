import React from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { getCourseList } from '../../apis/couresList';
import CourseItem from '../common/Item/CourseItem';
import axios from 'axios';
import Footer from '../common/Footer/Footer';
import CourseCarousel from '../common/Carousel/CourseCategory';
import { selectCategoryAtom } from '../../states/couresList';
import { useRecoilState, useRecoilValue } from 'recoil';


export default function CourseList() {
  
 
  const {isLoading,data:courseData}=useQuery("courseList",getCourseList,{
    select:data=>data?.result
  });
  const selectCategory=useRecoilValue<string>(selectCategoryAtom);
  
  

  return (
    <>

      <Navbar/>
      <div className='mt-35'></div>
      <CourseCategoryBarContainer>
        <CourseCarousel/>
      </CourseCategoryBarContainer>
      <CourseListContainer>
        {
          courseData?.slice(0,9).filter(item=>item.categories.includes(selectCategory)).map(course=>
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
    <Footer/>

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