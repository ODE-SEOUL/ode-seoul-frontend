import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMapLocationDot, faCalendarCheck, faPencil, faUser, faTags, faBars, faCheckCircle, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { getRecruitList } from '../../apis/recruitList';
import { useCourseListQuery } from '../CourseList/courseListQuery';
import { userAtom } from '../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';


enum Category {
  COM_ANIMAL = '#반려동물',
  COM_HOUSE = '#주부',
  COM_OFFICE = '#직장인',
  COM_NEIGHBOR = '#이웃주민',
  COM_EXERCISE = '#운동',
  COM_PHOTO = '#사진',
  COM_EXPER = '#체험',
}

const MyReport = () => {

  //courseList
  const { data: courseData } = useCourseListQuery();
  //courseId를 courseName으로 바꾸는 함수
  const printCourseName = (courseId: number) => {
    const matchingCourse = courseData?.find((course) => course.id === courseId);
    if (matchingCourse) {
      return matchingCourse.name;
    } else {
      console.log(`Course with id ${courseId} not found.`);
    }
  };

  const user = useRecoilValue(userAtom);
  const [mydata, setMydata] = useState([]);
  useEffect(() => {
    getRecruitList(user?.id)
      .then((response) => {
        const result = response.result.recruits;
        setMydata(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user.id]);

  
console.log(mydata);
  
  return (
    <>
     

      <Container >
        { !mydata ? (<div>잠시만 기다려주세요...</div>) : (
        <div className='row col-lg-12 mb-100'>
          <div className="row" >
            {mydata?.map((item: any) => {
              const {
                id,
                title,
                scheduledAt,
                courseId,
                content,
                category,
                currentPeople,
                maxPeople,
                progressStatus,
                createdAt,
              } = item;
            
              const course = printCourseName(courseId);
              return (
                <div key={id} >
                    <Card>
                        <div className='row'>
                            <div className='col-lg-8'><Title>{title}</Title></div>
                            <div className='col-lg-4'>
                                <Circle>{progressStatus}<FontAwesomeIcon icon={faCheckCircle} style={{color: '#fff', paddingLeft: '10px'}} /></Circle>
                                </div>
                        </div>
                        
                        <SubTitle>
                        {content.length > 100 ? content.slice(0, 130) + "..." : content}
                        </SubTitle>
                        <FlexContainer>
                            <Small><FontAwesomeIcon icon={faPencil} style={{color: 'rgb(171, 184, 104)', paddingRight: '10px'}} />{createdAt}</Small>
                            <Small><FontAwesomeIcon icon={faMapLocationDot} style={{color: 'rgb(171, 184, 104)' ,paddingRight: '10px'}} />{course}</Small>
                            <Small><FontAwesomeIcon icon={faCalendarCheck} style={{color: 'rgb(171, 184, 104)' ,paddingRight: '10px'}} />{scheduledAt}</Small>
                            <Small><FontAwesomeIcon icon={faUser} style={{color: 'rgb(171, 184, 104)' ,paddingRight: '10px'}} />{currentPeople}/{maxPeople}</Small>
                            <Small><FontAwesomeIcon icon={faTags} style={{color: 'rgb(171, 184, 104)' ,paddingRight: '10px'}} />{category}</Small>
                            <Small><FontAwesomeIcon icon={faPaperclip} style={{color: 'rgb(171, 184, 104)' ,paddingRight: '10px'}} />글 상세 확인하기</Small>
                        </FlexContainer> 
                    </Card>
                  
                </div>
              );
            })}
          </div>
        </div>)}
      </Container>

    </>
    
  );
};


export default MyReport;

const Container = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  font-family: var(--font-secondary);
  font-weight: 200;
`;

const FlexContainer = styled.div`
    display: flex;
    margin: 30px 0px; 

`;

const Small = styled.div`
  font-size: 13px;
  margin-left: 20px;
  line-height: 30px;
  font-weight: 300;
  font-family: var(--font-secondary);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 200;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  margin: 30px 30px 20px 30px; 
`;

const Circle = styled.div`

  font-size: 20px;
  background: rgb(171, 184, 104);
  color: #fff;
  border-radius: 10px;
  font-weight: 300;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  margin: auto;
  margin-top: 30px;
  width: 150px;
  text-align: center;
  padding: 5px;
`;


const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 100;
  font-family: var(--font-secondary);
  text-align: left;
  margin: 20px 30px; 
`;


const Card = styled.div`
  width: 100%;
  height: 200px;;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #eee;
`


