import React from 'react';
import styled from '@emotion/styled';

export interface Props {
    title: string;
    date: string;
    time: string;
    dest: string;
  }

export const Application = ({ title, date, time, dest }: Props) => {
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