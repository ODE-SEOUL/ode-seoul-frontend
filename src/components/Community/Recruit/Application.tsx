import React from 'react';
import styled from '@emotion/styled';
import { postApplication } from '@/src/apis/application';
import { userAtom } from '../../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';
import Modal from '../../../modal/LoginError';
import useModal from '@/src/hooks/useModal';
import { useRouter } from 'next/router';

export interface Props {
    id: number;
    title: string;
    date: string;
    time: string;
    dest: string;
    nickname: string;
    host: string;
  }


export const Application = ({ id, title, date, time, dest, nickname, host }: Props) => {


   

    const router = useRouter();
    const user = useRecoilValue(userAtom);
    console.log(user);
    const accessToken = localStorage.getItem("token") || (user && user.accessToken);

    const handleClick = () => {
        console.log('dsfsdd', host, nickname);
        if (!user){
            alert("로그인이 필요한 서비스입니다.");
            router.push('/');
        }else if(host === nickname ){
            alert("내 모집글에는 신청할 수 없습니다.");
        }else{
            postApplication(id, accessToken);
            alert("신청되었습니다!");
        }
        
      };

  return (
    <Wrapper>
        <Title>{title}</Title>
        <div className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
            <SubTitle className='col-lg-4'>만나는 날짜</SubTitle>
            <div className='col-lg-8'>
                {date}
            </div>
        </div>
        <div className='row' style={{ display: 'flex', flexWrap: 'wrap'}}>
            <SubTitle className='col-lg-4'>만나는 시간</SubTitle>
            <div className='col-lg-8'>
                {time}
            </div>
        </div>
        <div className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
            <SubTitle className='col-lg-4'>만나는 장소</SubTitle>
            <div className='col-lg-8'>
                {dest}
            </div>
        </div>
        <div className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
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
    margin: auto;
    margin-bottom: 30px;
    text-align: center;
    

    

`;

const SubTitle = styled.div`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
    color: rgb(108, 128, 75);
`;

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 30px;
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
    background: rgb(171, 184, 104);

    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;