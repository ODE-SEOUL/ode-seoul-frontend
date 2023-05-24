import React from 'react';
import styled from '@emotion/styled';
import { postApplication } from '@/src/apis/application';
import { userAtom } from '../../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';

export interface Props {
    id: number;
    title: string;
    date: string;
    time: string;
    dest: string;
    nickname: string;
  }


export const Application = ({ id, title, date, time, dest, nickname }: Props) => {

    const user = useRecoilValue(userAtom);
    console.log(user);
    const handleClick = () => {
        postApplication(id, user.accessToken);
        alert("신청되었습니다!")
      };

  return (
    <Wrapper>
        <Title>{title}</Title>
        <div className='row'>
            <SubTitle className='col-lg-4'>만나는 날짜</SubTitle>
            <div className='col-lg-8'>
                {date}
            </div>
        </div>
        <div className='row'>
            <SubTitle className='col-lg-4'>만나는 시간</SubTitle>
            <div className='col-lg-8'>
                {time}
            </div>
        </div>
        <div className='row'>
            <SubTitle className='col-lg-4'>만나는 장소</SubTitle>
            <div className='col-lg-8'>
                {dest}
            </div>
        </div>
        <div className='row'>
            <SubTitle className='col-lg-4'>신청자 정보</SubTitle>
            <div className='col-lg-8'>
                {nickname}
            </div>
        </div>
        <StyledButton onClick={handleClick}>신청하기</StyledButton>  
    </Wrapper>
  );
};

export default Application;

const Title = styled.div`
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 20px;
    text-algin: center;
    margin: 30px 85px;

    

`;

const SubTitle = styled.div`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
    color: var(--color-darkgreen);
`;

const Wrapper = styled.div`
    width: 80%;
`;

const StyledButton = styled.div`
    padding: 10px;
    width: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    height: 40px;
    background: var(--color-green);

    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;