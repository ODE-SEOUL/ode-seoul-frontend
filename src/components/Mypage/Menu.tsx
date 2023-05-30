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
    const [selectedMenu, setSelectedMenu] = useState<number>(1);
  
    const handleClick = (menuNumber: number) => {
      setSelectedMenu(menuNumber);
      handleMenuClick(menuNumber);
    };
  
    return (
      <>
        <Ul>
          <Li
            className={selectedMenu === 1 ? "selected" : ""}
            onClick={() => handleClick(1)}
          >
            프로필
          </Li>
          <Li
            onClick={() => handleClick(2)}
          >
            내 활동
          </Li>
              <SmallLi
                className={selectedMenu === 2 ? "selected" : ""}
                onClick={() => handleClick(2)}
              >
                내 모집글
              </SmallLi>
              <SmallLi
                className={selectedMenu === 3 ? "selected" : ""}
                onClick={() => handleClick(3)}
              >
                내 약속 정보
              </SmallLi>
              {/* <SmallLi
                className={selectedMenu === 4 ? "selected" : ""}
                onClick={() => handleClick(4)}
              >
                내 댓글
              </SmallLi> */}
          <Li
            className={selectedMenu === 5 ? "selected" : ""}
            onClick={() => handleClick(5)}
          >
            스탬프 북
          </Li>
        </Ul>
      </>
    );
  };

  
export default Menu;

const Li = styled.li`
  list-style: none;
  font-weight: 300;
  width: 70%;
  padding: 0px 20px;
border-radius: 5px;
height: 50px;
line-height: 50px;

  &.selected {
    color:#fff; 

    background-color: rgba(171, 184, 104, 0.8) ;
    font-weight: 500; /* 선택된 메뉴의 글꼴 굵기를 여기에 지정하세요 */
  }
`;

const SmallLi = styled.li`
  list-style: none;
  font-weight: 100;
  width: 55%;
  padding: 5px 40px;
  border-radius: 5px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;


  &.selected {
    color:#fff; 

    background-color: rgba(171, 184, 104, 0.8) ;
    font-weight: 500; /* 선택된 메뉴의 글꼴 굵기를 여기에 지정하세요 */
  }
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