import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import Link from 'next/link';
import useModal from '../../../hooks/useModal';
import Modal from '../../../modal/DefaultModal';
import LoginMain from '../../Login/LoginMain';
import { userAtom } from '@/src/states/UserAtom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SignupForm from '../../Login/SignupForm';


const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const [user, setUser] = useRecoilState(userAtom);
  const { isShowing, toggle } = useModal();

  const handleClick = () => {
    toggle();
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);
  
  // useEffect(() => {
  //   console.log(user);

  //   if (user) {
  //     console.log('마이페이지');
  //   } else {
  //     console.log('로그인');
  //   }
  // }, [user]);

  return (
    <NavbarContainer>
      <Logo>
        <Link href="/">
        <Image src='../assets/img/logo.svg' width={150} height={100} alt="nav"></Image>
        </Link>
      </Logo>
      <NavbarLinks>
        <ul>
          <li>
            <Link href="/odeseoul">오디서울</Link>
          </li>
          <li>
            <Link href="/course">코스 추천</Link>
          </li>
          <li>
            <Link href="/service">걷다 즐겨요</Link>
          </li>
          <li>
            <Link href="/community">같이 걸어요</Link>
          </li>
        </ul>
      </NavbarLinks>
      <AuthSection>
        <ul>
          {!user ? (
            <>
              <li>
                <div onClick={handleClick}>
                  <Image src="/assets/img/login_lock.svg" alt="login_lock" width={20} height={20} className="mr-10" />
                  로그인
                </div>
                {isShowing && (
                  <Modal isShowing={isShowing} hide={toggle}>
                    <LoginMain />
                  </Modal>
                )}
             
              </li>
              <li>
                <div onClick={handleClick}>회원가입</div>
                {isShowing && (
                  <Modal isShowing={isShowing} hide={toggle}>
                    <LoginMain />
                  </Modal>
                )}
              </li>
            </>
          ) : (
            <>
            <li>
                <Li>
                  <DropDown onClick={handleDropdownToggle}>
                      <FontAwesomeIcon icon={faUser} style={{ color: "#fff",  justifyContent:"center", alignItems:"center"}} size="2x" color="black"/>
                  <ListContainer>
                  <Ul>
                    <Li> <Link href="/mypage">프로필</Link></Li>
                    <Li> <Link href="/mypage">내 활동</Link></Li>
                    <Li> <Link href="/mypage">스탬프 북</Link></Li>
                    <Li onClick={handleLogout}>로그아웃 </Li>
                  </Ul>
                  </ListContainer>
                  </DropDown>
                </Li>
            </li>
            </>
            
          )}
        </ul>
      </AuthSection>
    </NavbarContainer>
  );
};

export default Navbar;


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  padding: 0 50px;
  font-weight: 100;
  font-family: var(--font-secondary);

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
  
`;

const Logo = styled.div`
  img {
    width: 150px;
  }
`;

const Image = styled.img`
`;

const NavbarLinks = styled.div`
 
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 70px;
  }

  a {
    font-size: 20px;
    color: #333;
    text-decoration: none;
  }

  a:hover {
    color: rgb(108, 128, 75);
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const AuthSection = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  li {
    font-size: 20px;
    color: #333;
    text-decoration: none;
    margin: 15px;
  }

  a {
    font-size: 20px;
    color: #333;
    text-decoration: none;
  }

  a:hover {
    color: rgb(108, 128, 75);
    font-weight: 300;
  }
`;

const DropDown = styled.button`
  background: rgb(108, 128, 75);
  border: 2px solid rgb(108, 128, 75);
  outline:none;
  position: relative;
  border-radius: 100%;
  padding: 13px 15px;
  `;


  const ListContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin-top: 25px;
  position: absolute;
  display:none;
  width:200px;
  right: -60px;

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