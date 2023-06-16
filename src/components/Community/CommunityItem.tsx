import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import community_data from "../../data/community-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMapLocationDot, faCalendarCheck, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useQuery, QueryFunction } from 'react-query';
import { getCourseList } from '@/src/apis/courseList';
import { GetRecruitListDto, IRecruitListData, RecruitItem, HostItem } from '../../types/recruitList';
import { useRouter } from 'next/dist/client/router';
import { IRecruitData } from '../../types/recruits';
import { useCourseListQuery } from '../CourseList/courseListQuery';
import { wrap } from 'module';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../states/UserAtom';
import { getRecruitList } from '@/src/apis/recruitList';
import Loading from '../Error/Loading';

interface WrapperProps {
  limit?: number;
  isMain? : boolean;
}

enum Category {
  COM_ANIMAL = '#반려동물',
  COM_HOUSE = '#주부',
  COM_OFFICE = '#직장인',
  COM_NEIGHBOR = '#이웃주민',
  COM_EXERCISE = '#운동',
  COM_PHOTO = '#사진',
  COM_EXPER = '#체험',
}

const CommunityItem = ({ limit , isMain = false }: WrapperProps) => {

  const user = useRecoilValue(userAtom);
  const handleCircleClick = () => {
    if (!user) {
      alert('로그인이 필요한 서비스입니다');
      router.push('/');
    }else if(user){
      window.location.href = '/recruit';
    }
  };
  

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

  //formatDate
  function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

   //detail page
   const router=useRouter();
   const DetailHandler=(recruit:RecruitItem  & HostItem)=>{
    const courseName = printCourseName(recruit.courseId);
    // console.log('이거이거', recruit.id);
   router.push({
     pathname:`/recruit/${recruit.id}`});
    }

  //recruit api
  useEffect(() => {
    getRecruitList()
    .then((response) => {
      console.log(response.result);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  //recruit api - useQuery
  const queryFunction: QueryFunction<GetRecruitListDto> = async () => {
    const response = await getRecruitList();
    return response;
  };
  const { isLoading, data: recruitData } = useQuery('RecruitDetail', queryFunction, {
    select: (data) => {
        return data.result.recruits;
    },
  });
 
  //카테고리 선택(초기 선택 #반려동물 지정)
  const [selectedCategory, setSelectedCategory] = useState<string>("#반려동물");
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredItems = recruitData?.filter((item: any) => {
    const categoryValue = Category[item.category as keyof typeof Category];// #반려동물 -> COM_ANIMAL로 바꾸는 코드
    return categoryValue === selectedCategory;
  });
  
  if(isLoading){
    return(
      <>
        <Loading/>
      </>

    );

  }else{
    return (
      <>
        <div style={{ background: "white",  borderTop: isMain ? "none" : "1px solid #eee" }}>
        <FlexContainer>
          {Object.values(Category).map((category: string, index: number) => {
            const colorClass = `color-${index + 1}`;
            return (
              <div key={index}>
                <CircleButton
                  isSelected={selectedCategory === category}
                  onClick={() => handleCategoryClick(category)}
                  className={colorClass}
                />
                {category}
              </div>
            );
          })}
        </FlexContainer>
        </div>
  
        <div style={{ justifyContent: "flex-end", display: "flex" }}>
          {isMain || (
          <Circle onClick={handleCircleClick}>
              <Link href="/recruit" style={{ color: "#eee", fontWeight: 300 }}>
                <FontAwesomeIcon icon={faPencil} /> 모집하기
              </Link>
            </Circle>
           )}
        
  
        </div>
  
        <FlexContainer style={{ background: "#eee" }}>
  
          <div className='row col-lg-12 mb-100'>
            <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
              {filteredItems?.slice(0, limit).map((item: any) => {
                
                const {
                  id,
                  image,
                  title,
                  scheduledAt,
                  courseId,
                  category,
                  currentPeople,
                  maxPeople,
                  progressStatus,
                  createdAt,
                  
                  //TODO: 타입 확장 필요
                  host:{hostId,nickname,profileImage,locationCode,signupStatus}
                } = item;

                if (progressStatus !== "OPEN") {
                  // progressStatus가 "OPEN"이 아닌 경우에는 렌더링하지 않음
                  return null;
                }
              
                const courseName = printCourseName(courseId)
                const formattedDate = formatDate(scheduledAt);
  
                return (
                  <div key={id} className="col-lg-3 col-sm-12">
                    <Card onClick={()=>DetailHandler(item)}>
                      <Img src={image} alt="이미지" width="100%"  />
                      <div className='row' style={{height: "50px", display: 'flex', flexWrap: 'wrap'}}>
                          <div className='col-lg-4'>
                              <ProfileImg src={profileImage}></ProfileImg>
                          </div>
                          <div className='col-lg-8'>
                              <Title>{nickname}</Title>
                          </div>
                      </div>
                      <div className="">
                        <Body>{title}</Body>
                      </div>
                      <div className="">
                  
                        <SubBody><FontAwesomeIcon icon={faMapLocationDot} className="mr-10" style={{color: 'rgb(171, 184, 104)' }}/>{courseName}</SubBody>
                        <SubBody><FontAwesomeIcon icon={faCalendarCheck} className="mr-10" style={{color: 'rgb(171, 184, 104)' }}/>{formattedDate}</SubBody>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </FlexContainer>
  
      </>);
  }
  
  
};


export default CommunityItem;

const FlexContainer = styled.div`
  display: flex;
  padding: 50px 90px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
  font-family: var(--font-secondary);
  font-weight: 200;

  @media screen and (max-width: 768px) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  height: auto;
`;

const Title = styled.div`
  font-size: 13px;
  margin-left: 20px;
  line-height: 30px;
  font-weight: 300;
  font-family: var(--font-secondary);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 200;
  }
`;

const Img = styled.img`
  object-fit: cover;
  height: 300px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;


const Body = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: var(--font-secondary);
  text-align: center;
  margin: 10px;
  margin-bottom: 15px;

  
`;

const SubBody = styled.div`
  font-size: 15px;
  font-weight: 100;
  font-family: var(--font-secondary);
  text-align: left;
  margin: 10px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    font-weight: 200;
  }
`;


const Card = styled.div`
  width: 90%;
  height: 450px;
  margin: auto;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 25px;
  background: #fff;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 90%;
    height: 350px;
  }
`


const CircleButton = styled.div<{ isSelected: boolean; onClick?: () => void }>`
  font-weight: 100;
  font-family: var(--font-secondary);
  border: none;
  font-size: 20px;
  border-radius: 100%;
  padding: 10px;
  width: 70px;
  height:70px;
  text-align: center;
  margin-bottom: 30px;
  cursor: pointer;

  &.color-1 {
    background-image: url('../assets/img/hashtags/반려동물.svg');
    transition: transform 0.3s;
  }
  &.color-1:hover {
    transform: scale(1.3);
  }

  &.color-2 {
    background-image: url('../assets/img/hashtags/주부.svg');
    transition: transform 0.3s;
  }
  &.color-2:hover {
    transform: scale(1.3);
  }

  &.color-3 {
    background-image: url('../assets/img/hashtags/직장인.svg');
    transition: transform 0.3s;
  }
  &.color-3:hover {
    transform: scale(1.3);
  }

  &.color-4 {
    background-image: url('../assets/img/hashtags/이웃주민.svg');
    transition: transform 0.3s;
  }
  &.color-4:hover {
    transform: scale(1.3);
  }

  &.color-5 {
    background-image: url('../assets/img/hashtags/운동.svg');
    transition: transform 0.3s;
  }
  &.color-5:hover {
    transform: scale(1.3);
  }

  &.color-6 {
    background-image: url('../assets/img/hashtags/사진.svg');
    transition: transform 0.3s;
  }
  &.color-6:hover {
    transform: scale(1.3);
  }

  &.color-7 {
    background-image: url('../assets/img/hashtags/체험.svg');
    transition: transform 0.3s;
  }
  &.color-7:hover {
    transform: scale(1.3);
  }


  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 15px;
    float: right;
  }
`;

const Circle = styled.div`
  font-weight: 100;
  font-family: var(--font-secondary);
  background-color: rgb(171, 184, 104);
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  text-align: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 15px;
    float: right;
  }

  :hover {
    background-color: rgb(108, 128, 75)
  }
`;

const ProfileImg = styled.img`
  font-weight: 100;
  font-family: var(--font-secondary);
  border: 2px solid #fff;
  background: #fff;
  font-size: 20px;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin: 10px;
  position: relative;
  z-index: 1; 
  top: -60px; 
  left: 50%;
  transform: translateX(-50%); 
  box-shadow: 3px 3px 10px #eee;
  object-fit: cover;
`;


