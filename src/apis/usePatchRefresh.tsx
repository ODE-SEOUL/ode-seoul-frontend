import { patchAsync } from './common';
import { userAtom } from '@/src/states/UserAtom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

const usePatchRefresh = async () => {

  const [user, setUser] = useRecoilState(userAtom);

  try {
    const response = await patchAsync<any, any>(
      "https://ode-seoul.fly.dev/auth/accounts/token",
      undefined,
      {
        withCredentials: true,
      }
    );

    if (response.data.code === 200) {
      const newAccessToken = response.data.result.accessToken;
      const newRefreshToken = response.data.result.refreshToken;

      setUser((prevUser) => ({
        ...prevUser,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      }));
    } else {
      console.error("토큰 갱신 실패");
      throw new Error("토큰 갱신 실패");
    }
  } catch (error) {
    console.error("토큰 갱신 요청 실패");
    throw new Error("토큰 갱신 요청 실패");
  }
};

export default usePatchRefresh;
