import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getStamps } from '@/src/apis/getStamps';
import { userAtom } from '../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';
import { useCourseListQuery } from '../../components/CourseList/courseListQuery';

const MyStamp = () => {

  const user = useRecoilValue(userAtom);
  const [mydata, setMydata] = useState([]);
  const { data: courseData } = useCourseListQuery();
  
  console.log(courseData);
   //courseId를 courseName으로 바꾸는 함수
   const printCourseName = (courseId: number) => {
    const matchingCourse = courseData?.find((course) => course.id === courseId);
    if (matchingCourse) {
      return matchingCourse.name;
    } else {
      console.log(`Course with id ${courseId} not found.`);
    }
  };
  //courseId를 자치구로 바꾸는 함수
  const printGugun = (courseId: number) => {
    const matchingCourse = courseData?.find((course) => course.id === courseId);
    if (matchingCourse) {
      console.log(matchingCourse.gugunSummary);
      return matchingCourse.gugunSummary;
    } else {
      console.log(`Gugun with id ${courseId} not found.`);
    }
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${year}년 ${month}월 ${day}일`;
  }
  
  
  


  useEffect(() => {
    getStamps(user?.id)
      .then((response) => {
        const result = response.result.map((item) => ({
          ...item,
        }));
        setMydata(result);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.id]);

    return (
    <>
      <Container>
       
          <div className='row col-lg-12 mb-100' style={{display: 'flex', flexWrap: 'wrap'}}>
            <div className="row">
              {mydata?.map((item: any) => {
                const {
                  id,
                  courseId,
                  createdAt,
                  
                } = item;
                const courseName = printCourseName(courseId);
                const formattedDate = formatDate(createdAt);
                const Gugun = printGugun(courseId);
                return (
                  <div key={id} className="col-lg-3 col-sm-12">
                    <Card>
                      <Circle >
                       <Img src={`../assets/img/stamps/${Gugun}.svg`} ></Img>
                      </Circle>
                      <div className='row' style={{height: "50px", display: 'flex', flexWrap: 'wrap'}}>
                        <Title>{courseName}</Title>
                        <SubTitle>{formattedDate}</SubTitle>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
       
      </Container>
    </>
  );

};


export default MyStamp;

const Container = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  font-family: var(--font-secondary);
  font-weight: 200;
  padding: 15px;
`;

const Img = styled.img`

`;


const Title = styled.div`
color: rgb(108, 128, 75); 
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0px;
  font-family: var(--font-secondary);
  text-align: center;
`;

const Circle = styled.div`
  object-fit: cover;
  font-size: 20px;
  border-radius: 100%;
  font-weight: 300;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  width: 150px;
  height: 150px;
  text-align: center;
  padding: 5px;
  margin: 20px auto;
`;


const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 100;
  font-family: var(--font-secondary);
  text-align: left;
  text-align: center;

`;


const Card = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #fff;
`


