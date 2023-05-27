import { patchAsync } from "./common";

export const updateProgressStatus = (state: string, id: number, accessToken: string) => {


    {
        try {
          const data = {
            progressStatus: `${state}`,
          };
      
          const headers = {
            Authorization: `Bearer ${accessToken}`,
          };
      
          const response = patchAsync(`/recruits/${id}/progress`, data, { headers });
      
          return response;

        //   console.log(response); // 필요에 따라 응답 처리
        } catch (error) {
          console.error(error); // 에러 처리
        }
      }
  
      
}
    