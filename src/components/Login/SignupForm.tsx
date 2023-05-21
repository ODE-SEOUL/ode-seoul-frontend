// SignupForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from '../../recoil/userAtom';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';

const SignupForm = ({ onSuccess }) => {
  const router = useRouter();

  const [locationCode, setLocationCode] = useState('');
  const [nickname, setNickname] = useState('');

  const user = useRecoilValue(userAtom);

  const handleSignup = () => {
    const requestData = {
      nickname: nickname,
      locationCode: locationCode,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    axios
      .post("https://ode-seoul.fly.dev/auth/accounts/signup", requestData, config)
      .then((res) => {
        if (res.data.code === 200) {
          console.log('회원가입 성공');
          onSuccess();
          console.log(user);
          router.push('/');
        } else {
          // TODO: 회원가입 실패 처리
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
        <>
        <Header>회원가입 완료하기</Header>
        <Wrapper>
            <Title>닉네임</Title>
            <StyledInput
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임을 입력해주세요"
            />
            <Title>사는 곳</Title>

            <SearchInput>
                <Input 
                    type="text"
                    value={locationCode}
                    onChange={(e) => setLocationCode(e.target.value)}
                    placeholder="지역을 찾아주세요" />
                <SearchIcon size={20} />
            </SearchInput>
            
            
            <Footer>
                <Circle onClick={handleSignup}>회원가입 </Circle>
            </Footer>
        </Wrapper>
        
    

    
    </>
  );
};

export default SignupForm;



const SearchInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border:  1px solid #999999;
  border-radius: 5px;
  width: 100%;

`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;

  ::placeholder {
    color: #ccc;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  margin-right: 0.5rem;
  color: #ccc;
`;

const Header = styled.div`
    font-size: 20px;
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 300;
    text-align: center;
    padding: 20px;
    border-bottom: solid 1px #aaa;
`
const Title = styled.div`
    font-size: 23px;
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 300;
    padding: 20px 0px;
    color: var(--color-darkgreen);
    margin: 20px 0px 10px 0px;
    font-weight: 500;
`
const StyledInput = styled.input`
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border:  1px solid #999999;
  border-radius: 5px;
  width: 100%;

  ::placeholder {
    color: #ccc;
  }
  
`;

const Wrapper = styled.div`
width: 80%;
`;

const Footer = styled.div` 
    font-size: 20px;
    font-family: var(--font-secondary);
    font-weight: 300;
    text-align: center;
    margin: 40px;
`



const Circle = styled.div`
  font-weight: 300;
  background: var(--color-green);
  font-weight: 300;
  font-family: var(--font-secondary);
  font-size: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin: auto;
  margin-top: 100px;
  width: 80%;
  text-align: center;
  color: #fff;

   @media screen and (max-width: 768px) {
     width: 100px;
     font-size: 15px;
     float: right;
  }

 `;