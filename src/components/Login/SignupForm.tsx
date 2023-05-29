// SignupForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from '../../states/UserAtom';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Modal from '../../modal/DefaultModal';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import { IGuGunListData } from '../../types/gugunList';
import { getGugunList } from '../../apis/guguns';
import { useQuery } from 'react-query';

const SignupForm = ({ onSuccess }: { onSuccess: () => void }) => {


    const [names, setNames] = useState([]); //지역이름 뭉텅이
    const [location, setLocation] = useState("");
    const [locationCode, setLocationCode] = useState('');
    const [result, setResult] = useState<any[]>([]); 


    useEffect(() => {
        getGugunList()
          .then((response) => {
            const result = response.result;
            setResult(result);
            const names = result.map((item) => item.name);
            setNames(names);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      const handleLocationSelect = (name: string) => {
        setLocation(name);
        const selectedLocation = result.find((item) => item.name === name);
        setLocationCode(selectedLocation?.code || '');
        setIsDropdownOpen(false);
      };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
  setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter();

  const [nickname, setNickname] = useState('');

  const user = useRecoilValue(userAtom);

  const handleSignup = () => {
    // console.log(nickname, locationCode )
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
        //   console.log('회원가입 성공');
          onSuccess()
          router.push('/')
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
    <OutSide>
      <ModalLayOut>
        <div>
          <CloseButton
            data-dismiss="modal"
            aria-label="Close"
            // onClick={props.hide}
          >
            <span aria-hidden="true">&times;</span>
          </CloseButton>
        </div>
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
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="지역을 찾아주세요"
                        />
                        <Li>
                        <DropDown onClick={handleDropdownToggle}>
                            <SearchIcon size={20} />
                            <ListContainer>
                            <Ul>
                                {names.map((name, index) => (
                                <Li key={index} onClick={() => handleLocationSelect(name)}>
                                    {name}
                                </Li>
                                ))}
                            </Ul>
                            </ListContainer>
                        </DropDown>
                        </Li>
                    </SearchInput>
                    
                    
                    <Footer>
                        <Circle onClick={handleSignup}>회원가입 </Circle>
                    </Footer>
                </Wrapper>
      </ModalLayOut>
    </OutSide>,
    </>
    
  );

                                };

export default SignupForm;


const OutSide = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalLayOut = styled.div`
  padding: 20px;
  width: 500px;
  height: 600px;
  margin: auto;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.div`
  margin: 10px;
  cursor: pointer;
  text-align: right !important;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.8rem;
  border:  1px solid #999999;
  border-radius: 5px;

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
    padding-bottom: 20px;
    border-bottom: solid 1px #aaa;
`

const Img = styled.img`
    width: 80%;
`
const Title = styled.div`
    font-size: 23px;
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 300;
    padding: 20px 0px;
    color: rgb(108, 128, 75);
    margin: 20px 0px 10px 0px;
    font-weight: 500;
`
const StyledInput = styled.input`
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border:  1px solid #999999;
  border-radius: 5px;
  width: 93%;

  ::placeholder {
    color: #ccc;
  }
  
`;

const Wrapper = styled.div`
width: 80%;
margin: auto;
`;

const Footer = styled.div` 
    font-size: 20px;
    font-family: var(--font-secondary);
    font-weight: 300;
    text-align: center;
    padding: 20px;
`

const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin: 80px;
  text-align: center;
  font-family: var(--font-secondary);
  font-weight: 200;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;



const Circle = styled.div`
  font-weight: 300;
  background: rgb(171, 184, 104);
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

 const DropDown = styled.button`
  border: none;
  position: relative;
  background: none;
  `;
 

  const ListContainer = styled.div`
  background-color: #fff;
  overflow: scroll;
  height: 200px;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 15px;
  position: absolute;
  display:none;
  width:330px;
  right: -10px;

  ${DropDown}:focus & {
    display: block;
  }
  ${DropDown}:hover & {
    display: block;
  }
  ${DropDown}:active & {
    display: block;
  }
`;

const Li = styled.li`
  list-style: none;
  font-weight: 100;
 
`;

const Ul = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 10px;
  }

  
`;