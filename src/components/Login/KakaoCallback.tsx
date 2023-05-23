import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from '../../recoil/userAtom';
import { useRouter } from 'next/router';
import SignupForm from './SignupForm';

const KakaoCallback = () => {
  const router = useRouter();

  const [user, setUser] = useRecoilState(userAtom);
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    const requestData = {
      authorizationCode: code,
      redirectedUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
    };

    axios
      .post("https://ode-seoul.fly.dev/auth/accounts/login/kakao", requestData)
      .then((res) => {
        if (res.data.code === 200) {
          // 인증 성공, 유저 정보를 Recoil atom에 저장
          const userInfo = {
            id: Number(res.data.result.id), 
            name: res.data.result.socialProfile.nickname,
            photo: res.data.result.socialProfile.profileImage,
            nickname: res.data.result.socialProfile.nickname,
            locationCode: '1135000000', // 유저의 위치 코드 정보를 설정 필요
            accessToken: res.data.result.accessToken,
            refreshToken: res.data.result.refreshToken,
            isLogin: true,
            isSignup: false,
          };

          setUser(userInfo);
          // console.log('일단 로그인 성공');

          // 회원가입 상태 확인을 위한 GET 요청
          axios
            .get(`https://ode-seoul.fly.dev/users/${userInfo.id}`)
            .then((response) => {
              if (response.data.result.signupStatus === "REGISTERED") {
                router.push('/');
              } else if (response.data.result.signupStatus === 'BEFORE_REGISTERED') {
                setIsSignup(false);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          // TODO
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setUser, user]);

  useEffect(() => {
    console.log(user); // 콘솔에 유저 정보 출력
  }, [user]); // user 추가


  const handleSignupSuccess = () => {
    setIsSignup(true);

    setUser((prevUser: any) => ({
      ...prevUser,
      isSignup: true,
    }));
  };

  if (user?.isLogin && !isSignup) {
    return <SignupForm onSuccess={handleSignupSuccess} />;
  }

  // return null;
};

export default KakaoCallback;
