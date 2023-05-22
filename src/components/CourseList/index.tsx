import React from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { getCourseList } from '../../apis/courseList';
import CourseItem from './CourseItem';
import axios from 'axios';
import Footer from '../common/Footer/Footer';
import CourseCarousel from '../common/Carousel/CourseCategory';
import { selectCategoryAtom } from '../../states/couresList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/dist/client/router';
import { ICourseData } from '../../types/courseList';


export default function CourseList() {
  
 
  const {isLoading,data:courseData}=useQuery("courseList",getCourseList,{
    select:data=>data?.result
  });
  const selectCategory=useRecoilValue<string>(selectCategoryAtom);
  const router=useRouter();
  const onClick=(course:ICourseData)=>{
    router.push({
      pathname:`/course/${course.name}`,
      query:{
          name:course.name,
          distance:course.distance,
          time:course.time,
          description:course.description,
          subway:course.nearSubway,
          accessway:course.accessWay,
          image:course.image


        }
    },
    `/course/${course.name}`);

  }
  return (
    <>

      <Navbar/>
      <div className='mt-100'></div>
      <CourseCategoryBarContainer>
        <CourseCarousel/>
      </CourseCategoryBarContainer>
      <div className='mt-35'></div>
      <CourseListContainer>
          {
            courseData?.slice(0,9).filter(item=>item.categories.includes(selectCategory)).map(course=>
              <CourseItemBtn key={course.id} onClick={()=>onClick(course)} > 
                  <CourseItem 
                    key={course.id} 
                    id={course.id}
                    name={course.name}
                    image={course.image}
                    gugunSummary={course.gugunSummary}
                    description={course.description}

                  />
              </CourseItemBtn>
              )
          }
        
        </CourseListContainer>
    <Footer/>

    </>
  );
};


const CourseCategoryBarContainer=styled.div`
  
  justify-content: center;
  align-items: center;
  
`;

const CourseListContainer=styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin: 3rem;
 

  
`;

const CourseItemBtn=styled.button`
    border:0;
    outline:0;
    background-color: transparent; 
    margin: 1.25rem;
    height:32.9375rem;
    width:15rem; 
    box-sizing: border-box;
  

`