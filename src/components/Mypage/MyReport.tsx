import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMapLocationDot, faCalendarCheck, faPencil, faUser, faTags, faBars, faCheckCircle, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { getRecruitList } from '../../apis/recruitList';
import { useCourseListQuery } from '../CourseList/courseListQuery';
import { userAtom } from '../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';
import { updateProgressStatus } from '@/src/apis/patchState';
import { patchAsync } from '@/src/apis/common';
import { useRouter } from "next/router";
import Link from 'next/link';

enum Category {
  COM_ANIMAL = '#반려동물',
  COM_HOUSE = '#주부',
  COM_OFFICE = '#직장인',
  COM_NEIGHBOR = '#이웃주민',
  COM_EXERCISE = '#운동',
  COM_PHOTO = '#사진',
  COM_EXPER = '#체험',
}


enum ProgressStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  DONE = 'DONE',
}

const MyReport = () => {

  const options: Record<ProgressStatus, string[]> = {
    [ProgressStatus.OPEN]: ['CLOSED', 'DONE'],
    [ProgressStatus.CLOSED]: ['DONE'],
    [ProgressStatus.DONE]: [],
  };


  
  const [mydata, setMydata] = useState([]);
  const user = useRecoilValue(userAtom);

  const router = useRouter();

  if (!user){
  alert("로그인이 필요한 서비스입니다.");
  router.push('/');
  }
  
  
  const { data: courseData } = useCourseListQuery();

  useEffect(() => {
    getRecruitList(user?.id, undefined)
      .then((response) => {
        const result = response.result.recruits.map((item) => ({
          ...item,
          toggle: false,
        }));
        setMydata(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.id]);

  const printCourseName = (courseId: number) => {
    const matchingCourse = courseData?.find((course) => course.id === courseId);
    if (matchingCourse) {
      return matchingCourse.name;
    } else {
      console.log(`Course with id ${courseId} not found.`);
    }
  };

  const handlerStatus = useCallback(
    (itemId: number) => {
      setMydata((prevData) =>
        prevData.map((item) =>
          item.id === itemId ? { ...item, toggle: !item.toggle } : item
        )
      );
    },
    []
  );

  const [toggle, setToggle] = useState(false);

  const handlerStatusUpdate = (status: string, id: number) => {
    updateProgressStatus(status, id, user.accessToken)
      .then((response) => {
        console.log(response);
        // 토글 상태 변경
        setMydata((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, progressStatus: status, toggle: false } : item
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };


  
  return (
    <>
    <TTitle>내 모집글</TTitle>
      <Container>
        {!mydata ? (
          <div>잠시만 기다려주세요...</div>
        ) : (
          <div className='row col-lg-12 mb-100' style={{display: 'flex', flexWrap: 'wrap'}}>
            <div className="row">
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
                  toggle
                } = item;

                

                const toggleList = options[progressStatus as ProgressStatus] || [];

                // const handlerStatus = () => {
                //   console.log(toggleList);
                //   handlerStatus(id); // itemId를 전달하여 해당 아이템의 토글 상태 변경
                // };

                return (
                  <div key={id}>
                    <Card>
                      <div className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div className='col-lg-8'><Title>{title}</Title></div>
                        <div className='col-lg-4'>
                        <Circle onClick={() => handlerStatus(id)}>

                            {progressStatus}
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{ color: '#fff', paddingLeft: '10px' }}
                            />
                          </Circle>

                          {toggle && (
                            <ListContainer>
                            <Ul>
                              {toggleList.map((status: string, index: number) => (
                                <Li key={index} onClick={() => handlerStatusUpdate(status, id)}>{status}</Li>
                              ))}
                            </Ul>
                            </ListContainer>
                          )}

                          
                        </div>
                      </div>

                      <SubTitle>
                        {content.length > 100 ? content.slice(0, 130) + "..." : content}
                      </SubTitle>
                      <FlexContainer>
                        <Small><FontAwesomeIcon icon={faPencil} style={{ color: 'rgb(171, 184, 104)', paddingRight: '10px' }} />{createdAt}</Small>
                        <Small><FontAwesomeIcon icon={faMapLocationDot} style={{ color: 'rgb(171, 184, 104)', paddingRight: '10px' }} />{printCourseName(courseId)}</Small>
                        <Small><FontAwesomeIcon icon={faCalendarCheck} style={{ color: 'rgb(171, 184, 104)', paddingRight: '10px' }} />{scheduledAt}</Small>
                        <Small><FontAwesomeIcon icon={faUser} style={{ color: 'rgb(171, 184, 104)', paddingRight: '10px' }} />{currentPeople}/{maxPeople}</Small>
                        <Small><FontAwesomeIcon icon={faTags} style={{ color: 'rgb(171, 184, 104)', paddingRight: '10px' }} />{category}</Small>
                        <Small>
                          <Link href={`/recruit/${id}`}>
                            <FontAwesomeIcon icon={faPaperclip} style={{ color: 'rgb(171, 184, 104)', paddingRight: '10px' }} />글 상세 확인하기
                          </Link>
                        </Small>
                      </FlexContainer>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        )}
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

const TTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  color: rgb(171, 184, 104);
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
  height: 200px;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #eee;
  `;
  

  const ListContainer = styled.div`
  background-color: rgb(171, 184, 104);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  padding-bottom: 0px;

  position: absolute;
  width:135px;
  margin: 65px;
  margin-top: 10px;
 

`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: 300;
  border-bottom: 1px solid #eee;
  width: 100%;
  color: #fff;
  text-align: center;
`;

const Ul = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 10px;
  }

  
`;