import React, { useState } from "react";
import styled from '@emotion/styled';
import MyProfile from "./MyProfile";
import MyReport from "./MyReport";
import MyStamp from "./MyStamp";
import MypageLayout from "./MypageLayout";
import Content from "./Content";

interface MenuProps {
    handleMenuClick: (componentNumber: number) => void;
  }

  
  const Menu: React.FC<MenuProps> = ({ handleMenuClick }) => {
    return (
      <>
        <Ul>
          <Li onClick={() => handleMenuClick(1)}>프로필</Li>
          <Li onClick={() => handleMenuClick(2)}>내 활동</Li>
          <Li onClick={() => handleMenuClick(3)}>스탬프 북</Li>
        </Ul>
      </>
    );
  };
  

export default Menu;

const Li = styled.li`
  list-style: none;
  font-weight: 400;
`;

const Ul = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 70px;
  
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 10px;
  }

  
`;