import React, { useState } from 'react';
import styled from '@emotion/styled';

const CommunityCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const category_list: string[] = [
    '#반려동물',
    '#주부',
    '#직장인',
    '#이웃주민',
    '#운동',
    '#사진',
    '#체험',
  ];

  return (
    <>
      <div style={{ background: "white" }}>
        <FlexContainer>
          {category_list.map((category: string, index: number) => {
            const colorClass = `color-${index + 1}`;
            return (
              <Set key={index} >
                <CircleButton
                  isSelected={selectedCategory === index + 1}
                  onClick={() => handleCategoryClick(index + 1)}
                  className={colorClass}
                />
                <div>{category}</div>
              </Set>
            );
          })}
        </FlexContainer>
      </div>
    </>
    
  );
};

export default CommunityCategory;

const FlexContainer = styled.div`
  display: flex;
  margin: 30px;
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


const Set = styled.div`
    @media screen and (max-width: 768px) {
        margin: 10px;
    } 
`;
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
    margin-bottom: 8px;
  }
`;

