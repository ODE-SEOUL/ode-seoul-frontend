import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { userAtom } from '../../states/UserAtom';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { getGugunList } from '@/src/apis/guguns';
import { useRouter } from "next/router"
import { updateUser } from '../../apis/patchUser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMapLocationDot, faCalendarCheck, faPencil } from "@fortawesome/free-solid-svg-icons";

const MyProfile = () => {

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
  const setUser = useSetRecoilState(userAtom); 

  const handleSignup = () =>{
   
    updateUser(nickname, locationCode, user.accessToken)
    .then((res: any) => {
      console.log(res);
      if (res.code === 200) {
          setUser((prevUser) => ({
            ...prevUser,
            nickname: nickname,
            locationCode: locationCode,
          }));
          alert(`${nickname}, ${locationCode}로 변경되었습니다.`);
          console.log(user);
        } else{
        alert('정보가 성공적으로 업데이트 되지 않았습니다. 다시 시도해주세요.')
      }
    });
  
    
  }
  
  return (
    <>
      <Container>
        <Title>{user?.name}님</Title>
        <FlexContainer>
          <PImg src={user?.photo} />
        </FlexContainer>
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
                            <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                            <ListContainer>
                            <Ul>
                                {names?.map((name, index) => (
                                <Li key={index} onClick={() => handleLocationSelect(name)}>
                                    {name}
                                </Li>
                                ))}
                            </Ul>
                            </ListContainer>
                        </DropDown>
                        </Li>
                    </SearchInput>
                  <StyledButton onClick={handleSignup}>저장하기</StyledButton>

      </Container>

    </>
    
  );
};


export default MyProfile ;

const StyledInput = styled.input`
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border:  1px solid #999999;
  border-radius: 5px;
  width: 50%;
  margin-left: 30px;
  
  ::placeholder {
    color: #ccc;
  }
  
`;
const SearchInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border:  1px solid #999999;
  border-radius: 5px;
  width: 50%;
  margin-left: 30px;

`;

const StyledButton = styled.div`
    padding: 5px;
    width: 50%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    height: 30px;
    background: rgb(171, 184, 104);

    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;

  ::placeholder {
    color: #ccc;
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
width:200px;
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


const Container = styled.div`
  border: 1px solid #eee;
  width: 50%;
  border-radius: 10px;
  font-family: var(--font-secondary);
  font-weight: 200;
  padding: 20px;
`;

const PImg= styled.img`
    width: 150px;
    height: 150px;
    background: rgb(171, 184, 104);
    border-radius: 100%;
    object-fit: cover;
`;

const FlexContainer = styled.div`
    display: flex;
    margin: 30px 50px; 

`;

const Small = styled.div`
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

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  margin: 30px 30px 20px 30px; 
`;

const Circle = styled.div`

  font-size: 20px;
  background: rgb(171, 184, 104);
  color: #fff;
  border-radius: 10px;
  font-weight: 300;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  margin: auto;
  margin-top: 30px;
  width: 150px;
  text-align: center;
  padding: 5px;
`;


const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 100;
  font-family: var(--font-secondary);
  text-align: left;
  margin: 20px 30px; 
`;


const Card = styled.div`
  width: 100%;
  height: 200px;;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #eee;
`


