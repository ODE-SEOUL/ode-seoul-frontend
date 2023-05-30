import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../states/UserAtom';
import { useRouter } from 'next/router';
import SignupForm from './SignupForm';
import Loading from '../Error/Loading';

const KakaoCallback = () => {
  const router = useRouter();

  const [user, setUser] = useRecoilState(userAtom);
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    const storedUser = window.localStorage.getItem('user');
    if (storedUser) {
      const userInfo = JSON.parse(storedUser);
      setUser(userInfo);
    }
  }, [setUser]);

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

          window.localStorage.setItem('user', JSON.stringify(userInfo));
          setUser(userInfo);

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
        } else if (res.data.code === 401) {
          axios.patch("https://ode-seoul.fly.dev/auth/accounts/token", requestData, { withCredentials: true })
            .then((response) => {
              if (response.data.code === 200) {
                const { accessToken, refreshToken } = response.data.result;

                setUser((prevUser) => ({
                  ...prevUser,
                  accessToken,
                  refreshToken,
                }));
              } else {
                // TODO: 오류 처리 로직
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
  }, [setUser]);

  useEffect(() => {
    console.log(user); // 콘솔에 유저 정보 출력
  }, [user]);

  const handleSignupSuccess = () => {
    setIsSignup(true);

    setUser((prevUser) => ({
      ...prevUser,
      isSignup: true,
    }));
  };

  if (user?.isLogin && !isSignup) {
    return <SignupForm onSuccess={handleSignupSuccess} />;
  }

  return <Loading />;
};

export default KakaoCallback;
