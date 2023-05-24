import { postAsync } from './common';

export const postApplication = async (id: number, accessToken: string) => {
  try {
    const response = await postAsync<any, null>(
      `/recruits/${id}/applications`,
      null,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );
    console.log('응답:', response);
    return response;

    // 요청 성공 시 처리할 내용
  } catch (error) {
    console.error('에러:', error);
    // 요청 실패 시 처리할 내용
  }
};

