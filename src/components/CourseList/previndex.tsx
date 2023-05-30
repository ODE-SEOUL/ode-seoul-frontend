import React from 'react';

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


export default function PrevIndex() {
  const { data: courseData } = useCourseListQuery();
  const selectCategory=useRecoilValue<string>(selectCategoryAtom);
  const router=useRouter();
  const onClick=(course:ICourseData)=>{
  
    router.push({
      pathname:`/course/${course.id}`});

  }
  return (
    <>

        
          <div className='mt-100'></div>
          <CourseCategoryBarContainer>
            <CourseCarousel/>
          </CourseCategoryBarContainer>
          <div className='mt-35'></div>
          <div className='row col-lg-12'>
              <div className="row" style={{display:'flex',flexWrap:'wrap'}}>
              {
                          courseData?.slice(0,17).filter(item=>item.categories.includes(selectCategory)).map(
                            course=>
                            <div className='col-lg-4 col-sm-12' key={course.id}>
                              <CourseItemBtn onClick={()=>onClick(course)} > 
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

                            
                            </div>
                              
                            

                            )
                        }

              </div>
          
          </div>
    </>
  );
};



const CourseCategoryBarContainer=styled.div`
  
  justify-content: center;
  align-items: center;
  
`;



const CourseItemBtn=styled.div`
    cursor:pointer;
    margin: auto;
    height:38rem;
    width:25rem; 
    box-sizing: border-box;
  

`

const CourseCategoryItemContainer=styled.div`
  display:flex;
  flex-wrap: wrap;
`