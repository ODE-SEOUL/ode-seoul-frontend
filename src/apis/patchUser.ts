import { patchAsync } from "./common";

export const updateUser = async (nickname: string, locationCode: string, accessToken: string) => {
    try {
      const data = {
        nickname: `${nickname}`,
        locationCode: `${locationCode}`
      };
  
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      const response = await patchAsync("/users/me/profile", data, { headers });
  
      return response;
    } catch (error) {
      console.error(error); // 에러 처리
    }
  }
   