import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import community_data from "../../data/community-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMapLocationDot, faCalendarCheck, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useQuery, QueryFunction } from 'react-query';
import { getRecruitList } from '../../apis/recruitList';
import { GetRecruitListDto, IRecruitListData, RecruitItem, HostItem } from '../../types/recruitList';
import { useRouter } from 'next/dist/client/router';
import { IRecruitData } from '../../types/recruits';
import { useCourseListQuery } from '../CourseList/courseListQuery';
import { wrap } from 'module';


enum Category {
  COM_ANIMAL = '#반려동물',
  COM_HOUSE = '#주부',
  COM_OFFICE = '#직장인',
  COM_NEIGHBOR = '#이웃주민',
  COM_EXERCISE = '#운동',
  COM_PHOTO = '#사진',
  COM_EXPER = '#체험',
}

const CommunityItem = () => {

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

   //detail page
   const router=useRouter();
   const DetailHandler=(recruit:RecruitItem  & HostItem)=>{
   router.push({
     pathname:`community/recruit/${recruit.title}`,
     query:{
       courseId:recruit.courseId,
       category:recruit.category,
       title:recruit.title,
       content:recruit.content,
       image:recruit.image,
       maxPeople:recruit.maxPeople,
       scheduledAt:recruit.scheduledAt,
       currentPeople:recruit.currentPeople,
       progressStatus:recruit.progressStatus,
       createdAt:recruit.createdAt,
       id:recruit.id,
      },

       },
   `community/recruit/${recruit.title}`);
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
  const { isLoading, data: recruitData } = useQuery('recruitList', queryFunction, {
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
  
  return (
    <>
      <div style={{ background: "white" }}>
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
        <Circle> 
          <Link href="community/recruit" style={{color: "#eee", fontWeight: 300}}><FontAwesomeIcon icon={faPencil} />     모집하기</Link>
        </Circle>
      </div>

      <FlexContainer style={{ background: "#eee" }}>

        <div className='row col-lg-12 mb-100'>
          <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
            {filteredItems?.map((item: any) => {
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
            
              const courseName = printCourseName(courseId)

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
                      <SubBody><FontAwesomeIcon icon={faCalendarCheck} className="mr-10" style={{color: 'rgb(171, 184, 104)' }}/>{scheduledAt}</SubBody>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </FlexContainer>

    </>
    
  );
};


export default CommunityItem;

const FlexContainer = styled.div`
  border-top: 1px solid #eee;
  display: flex;
  padding: 70px;
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
  }
`;

const Title = styled.div`
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

const Img = styled.img`
  object-fit: cover;
  height: 300px;
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
    font-size: 20px;
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
  }
`


const CircleButton = styled.div<{ isSelected: boolean; onClick?: () => void }>`
  font-weight: 100;
  font-family: var(--font-secondary);
  border: none;
  font-size: 20px;
  border-radius: 100%;
  padding: 10px;
  width: 50px;
  height: 50px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &.color-1 {
    background-color: ${({ isSelected }) => (isSelected ? '#ABB868' : '#eee')};
  }

  &.color-2 {
    background-color: ${({ isSelected }) => (isSelected ? '#FFC3A0' : '#eee')};
  }

  &.color-3 {
    background-color: ${({ isSelected }) => (isSelected ? '#CDB4DB' : '#eee')};
  }

  &.color-4 {
    background-color: ${({ isSelected }) => (isSelected ? '#FFD8D8' : '#eee')};
  }

  &.color-5 {
    background-color: ${({ isSelected }) => (isSelected ? '#BDE0FE' : '#eee')};
  }

  &.color-6 {
    background-color: ${({ isSelected }) => (isSelected ? '#C8E6C9' : '#eee')};
  }

  &.color-7 {
    background-color: ${({ isSelected }) => (isSelected ? '#FFE0AC' : '#eee')};
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


