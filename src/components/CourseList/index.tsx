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
import { selectCategoryAtom } from '../../states/CourseAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/dist/client/router';
import { ICourseData } from '../../types/courseList';
import { useCourseListQuery } from './courseListQuery';
import { Grid } from '@mui/material';

export default function CourseList() {
  const { data: courseData } = useCourseListQuery();
  const selectCategory=useRecoilValue<string>(selectCategoryAtom);
  const router=useRouter();
  const onClick=(course:ICourseData)=>{
  
    router.push({
      pathname:`/course/${course.id}`,
      query:{
          id:course.id,
          name:course.name,
          distance:course.distance,
          time:course.time,
          description:course.description,
          nearSubway:course.nearSubway,
          accessWay:course.accessWay,
          image:course.image,
          routes:JSON.stringify(course.routes[0]),
          lng:course.routes[0][0][0],
          lat:course.routes[0][0][1]
          


        }
    },
    `/course/${course.id}`);

  }
  return (
    <>

      <Navbar/>
      
          <div className='mt-100'></div>
          <CourseCategoryBarContainer>
            <CourseCarousel/>
          </CourseCategoryBarContainer>
          <div className='mt-35'></div>
          <Grid container xs={2} sm={4} md={6} lg={12}>
                    {
                      courseData?.slice(0,17).filter(item=>item.categories.includes(selectCategory)).map(
                        course=>
                        <Grid item xs key={course.id}>
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
                              routes={course.routes}

                            />
                        </CourseItemBtn>

                        
                        </Grid>
                          
                        

                        )
                    }
                  </Grid>
      
    
      <Footer/>

    </>
  );
};



const CourseCategoryBarContainer=styled.div`
  
  justify-content: center;
  align-items: center;
  
`;



const CourseItemBtn=styled.button`
    border:0;
    outline:0;
    background-color: transparent; 
    margin: 1.25rem;
    height:30rem;
    width:25rem; 
    box-sizing: border-box;
  

`

