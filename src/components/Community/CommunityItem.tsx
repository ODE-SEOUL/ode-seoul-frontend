import React, { useState } from 'react';
import styled from '@emotion/styled';
<<<<<<< HEAD
import Link from 'next/link';
=======
import { css } from '@emotion/react';
>>>>>>> feat/#4_login
import community_data from "../../data/community-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface Category {
  category_id: number;
  category: string;
}

const CommunityItem = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const filteredItems: Category[] = community_data.filter(
    (item: Category) => item.category_id === selectedCategory
  );

  const category_list: string[] = [
    '#반려동물',
    '#주부',
    '#직장인',
    '#이웃주민',
    '#운동',
    '#사진',
    '#체험',
  ];

  const handlerWrite = () => {

  }

  return (
    <>
      <div style={{ background: "white" }}>
        <FlexContainer>
          {category_list.map((category: string, index: number) => {
            const colorClass = `color-${index + 1}`;
            return (
              <div key={index}>
                <CircleButton
                  isSelected={selectedCategory === index + 1}
                  onClick={() => handleCategoryClick(index + 1)}
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
          <Link href="/recruit">글쓰기</Link>
        </Circle>
      </div>

      <FlexContainer style={{ background: "#eee" }}>

        <div className='row col-lg-12 mb-100'>
          <div className="row">
            {filteredItems.slice(0, 4).map((item: Category) => {
              const { id, img, title, writer, time, dest, category, category_id } = item;
              return (
                <div key={id} className="col-lg-3 col-sm-12">
                  <Card>
                    <Img src={img} width="100%" />
                    <div className='row' style={{height: "50px"}}>
                        <div className='col-lg-6'>
                            <ProfileImg></ProfileImg>
                        </div>
                        <div className='col-lg-6'>
                            <Title>{writer}</Title>
                        </div>
                    </div>
                    <div className="">
                      <Body>{title}</Body>
                    </div>
                    <div className="">
                      <SubBody><FontAwesomeIcon icon={faAngleRight} className="mr-10"/>{dest}</SubBody>
                      <SubBody><FontAwesomeIcon icon={faAngleRight} className="mr-10"/>{time}</SubBody>
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
  font-size: 15px;
  margin-left: 20px;
  line-height: 50px;
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
`;


const Body = styled.div`
  font-size: 20px;
  font-weight: 300;
  font-family: var(--font-secondary);
  text-align: center;
  margin: 20px;
`;

const SubBody = styled.div`
  font-size: 15px;
  font-weight: 100;
  font-family: var(--font-secondary);
  text-align: left;
  margin: 10px;
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 200;
  }
`;


const Card = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 25px;
  background: #fff;

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
  width: 80px;
  height: 80px;
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
  border: 1px solid var(--color-darkgreen);
  font-size: 20px;
  border-radius: 20px;
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
    background-color: var(--color-darkgreen)
  }
`;

const ProfileImg = styled.div`
  font-weight: 100;
  font-family: var(--font-secondary);
  border: 1px solid #fff;
  background: #fff;
  font-size: 20px;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin: 10px;
  position: relative;
  z-index: 1; 
  top: -60px; 
  left: 50%;
  transform: translateX(-50%); 
  box-shadow: 3px 3px 10px #eee;
`;


