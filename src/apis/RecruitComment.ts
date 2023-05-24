import { postAsync } from './common';

interface Contents {
  content: string;
}

export const postComments = async (id: string, accessToken: string, contents: Contents) => {
  try {
    const response = await postAsync<any, Contents>(
      `/recruits/${id}/comments`,
      contents,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );
    console.log('응답:', response);
    return response;
  } catch (error) {
    console.error('에러:', error);
  }
};
