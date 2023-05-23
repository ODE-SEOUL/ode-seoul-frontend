import React from 'react';
import Breadcrumb from '../common/Breadcrumb/Breadcrumb';
import Navbar from '../common/Nav/Nav';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { getCourseList } from '../../apis/couresList';
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
          id:course.id,
          name:course.name,
          distance:course.distance,
          time:course.time,
          description:course.description,
          subway:course.nearSubway,
          accessway:course.accessWay,
          image:course.image,
          lat:course.routes[0][0][0],
          lng:course.routes[0][0][1]


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
          <Container>
              <CourseListContainer>
                  {
                    courseData?.slice(0,16).filter(item=>item.categories.includes(selectCategory)).map(course=>
                      <CourseItemBtn key={course.id} onClick={()=>onClick(course)} > 
                          <CourseItem 
                            key={course.id} 
                            id={course.id}
                            name={course.name}
                            image={course.image}
                            gugunSummary={course.gugunSummary}
                            description={course.description}
                            lat={course.routes[0][0][0]}
                            lng={course.routes[0][0][1]}

                          />
                      </CourseItemBtn>
                      )
                  }
                
              </CourseListContainer>
          </Container>
      
    
      <Footer/>

    </>
  );
};

const Container=styled.div`
  display: flex;
  justify-content: center;
  
`

const CourseCategoryBarContainer=styled.div`
  
  justify-content: center;
  align-items: center;
  
`;

const CourseListContainer=styled.div`
  display: inline-grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-gap: 0.2rem;
  
  

  
`;

const CourseItemBtn=styled.button`
    border:0;
    outline:0;
    background-color: transparent; 
    margin: 1.25rem;
    height:32.9375rem;
    width:20rem; 
    box-sizing: border-box;
  

`

